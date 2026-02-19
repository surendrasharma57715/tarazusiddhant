import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Starting database seed...')

    // Create admin user
    const hashedPassword = await bcrypt.hash('Pihu@2121', 10)

    const admin = await prisma.admin.upsert({
        where: { username: 'admin' },
        update: {
            email: 'surendrasharmaltp@gmail.com',
            password: hashedPassword,
        },
        create: {
            username: 'admin',
            email: 'surendrasharmaltp@gmail.com',
            password: hashedPassword,
            role: 'ADMIN',
        },
    })

    console.log('✅ Admin user created:', admin.email)

    // Create categories
    const categories = await Promise.all([
        prisma.category.upsert({
            where: { slug: 'trading-strategies' },
            update: {},
            create: {
                name: 'Trading Strategies',
                slug: 'trading-strategies',
                description: 'Learn proven trading strategies and techniques',
            },
        }),
        prisma.category.upsert({
            where: { slug: 'market-analysis' },
            update: {},
            create: {
                name: 'Market Analysis',
                slug: 'market-analysis',
                description: 'In-depth market analysis and insights',
            },
        }),
        prisma.category.upsert({
            where: { slug: 'education' },
            update: {},
            create: {
                name: 'Education',
                slug: 'education',
                description: 'Educational content for traders',
            },
        }),
        prisma.category.upsert({
            where: { slug: 'option-chain' },
            update: {},
            create: {
                name: 'Option Chain',
                slug: 'option-chain',
                description: 'Option chain analysis and Tarazu Principle',
            },
        }),
    ])

    console.log('✅ Categories created:', categories.length)

    // Create sample blog post
    const samplePost = await prisma.blogPost.upsert({
        where: { slug: 'welcome-to-tarazu-siddhant' },
        update: {},
        create: {
            title: 'Welcome to Tarazu Siddhant Trading Academy',
            slug: 'welcome-to-tarazu-siddhant',
            content: `
        <h2>Welcome to Our Trading Academy</h2>
        <p>We are excited to have you join our community of traders. At Tarazu Siddhant, we believe in empowering traders with knowledge and proven strategies.</p>
        
        <h3>What You'll Learn</h3>
        <ul>
          <li>Option Chain Analysis using Tarazu Principle</li>
          <li>Intraday Trading Strategies</li>
          <li>Risk Management Techniques</li>
          <li>Technical Analysis Fundamentals</li>
        </ul>
        
        <h3>Our Approach</h3>
        <p>Our teaching methodology focuses on practical, real-world application. We don't just teach theory - we show you how to apply these concepts in live market conditions.</p>
        
        <p>Join us on this journey to financial freedom through smart trading!</p>
      `,
            excerpt: 'Welcome to Tarazu Siddhant Trading Academy. Learn about our approach to trading education and what makes us different.',
            metaTitle: 'Welcome to Tarazu Siddhant Trading Academy',
            metaDescription: 'Join our trading academy and learn proven strategies for success in the stock market. Expert guidance in option chain analysis and intraday trading.',
            keywords: 'trading academy, option chain, tarazu siddhant, stock market education',
            status: 'PUBLISHED',
            publishedAt: new Date(),
            authorId: admin.id,
            categoryId: categories[2].id, // Education category
        },
    })

    console.log('✅ Sample blog post created:', samplePost.title)

    // Create sample lead
    const sampleLead = await prisma.lead.create({
        data: {
            name: 'Sample Lead',
            email: 'sample@example.com',
            phone: '+91 9999999999',
            message: 'I am interested in learning more about your trading courses.',
            status: 'PENDING',
            source: 'Contact Form',
        },
    })

    console.log('✅ Sample lead created:', sampleLead.email)

    console.log('🎉 Database seeding completed successfully!')
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
