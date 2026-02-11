import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const slug = params.slug

        const post = await prisma.blogPost.findFirst({
            where: {
                slug,
                status: 'PUBLISHED',
                deletedAt: null
            },
            include: {
                category: {
                    select: { name: true }
                },
                author: {
                    select: { username: true }
                }
            }
        })

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 })
        }

        return NextResponse.json(post)
    } catch (error: any) {
        console.error('Error fetching blog post:', error)
        return NextResponse.json({
            error: 'Internal server error',
            message: error.message,
            stack: error.stack
        }, { status: 500 })
    }
}
