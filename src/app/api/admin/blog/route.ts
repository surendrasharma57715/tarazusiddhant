import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { createBlogPostSchema } from '@/lib/validation'

// GET /api/admin/blog - List blog posts for admin
export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { searchParams } = new URL(request.url)
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '10')
        const search = searchParams.get('q') || ''
        const status = searchParams.get('status') || ''

        const skip = (page - 1) * limit

        const where: any = {
            deletedAt: null
        }

        if (search) {
            where.OR = [
                { title: { contains: search } },
                { slug: { contains: search } },
            ]
        }

        if (status && status !== 'ALL') {
            where.status = status
        }

        const [posts, total] = await Promise.all([
            prisma.blogPost.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    category: {
                        select: { name: true }
                    },
                    author: {
                        select: { username: true }
                    }
                }
            }),
            prisma.blogPost.count({ where }),
        ])

        return NextResponse.json({
            posts,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        })
    } catch (error: any) {
        console.error('Error fetching blogs:', error)
        return NextResponse.json({
            error: 'Internal server error',
            message: error.message,
            stack: error.stack
        }, { status: 500 })
    }
}

// POST /api/admin/blog - Create new blog post
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const validation = createBlogPostSchema.safeParse(body)

        if (!validation.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: validation.error.errors },
                { status: 400 }
            )
        }

        // Check for duplicate slug
        const existing = await prisma.blogPost.findUnique({
            where: { slug: validation.data.slug }
        })

        if (existing) {
            return NextResponse.json(
                { error: 'A post with this slug already exists' },
                { status: 400 }
            )
        }

        const post = await prisma.blogPost.create({
            data: {
                ...validation.data,
                authorId: parseInt((session.user as any).id),
                publishedAt: validation.data.status === 'PUBLISHED' ? new Date() : null
            }
        })

        return NextResponse.json(post, { status: 201 })
    } catch (error: any) {
        console.error('Error creating blog post:', error)
        return NextResponse.json({
            error: 'Internal server error',
            message: error.message,
            stack: error.stack
        }, { status: 500 })
    }
}
