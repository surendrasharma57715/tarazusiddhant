import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { updateBlogPostSchema } from '@/lib/validation'

// GET /api/admin/blog/[id] - Get single post
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const post = await prisma.blogPost.findUnique({
            where: { id: parseInt(params.id) },
            include: {
                category: true
            }
        })

        if (!post || post.deletedAt) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 })
        }

        return NextResponse.json(post)
    } catch (error) {
        console.error('Error fetching blog post:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// PATCH /api/admin/blog/[id] - Update blog post
export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const validation = updateBlogPostSchema.safeParse(body)

        if (!validation.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: validation.error.errors },
                { status: 400 }
            )
        }

        const id = parseInt(params.id)

        // Check if slug is taken by another post
        if (validation.data.slug) {
            const existing = await prisma.blogPost.findFirst({
                where: {
                    slug: validation.data.slug,
                    id: { not: id }
                }
            })
            if (existing) {
                return NextResponse.json(
                    { error: 'Slug is already in use' },
                    { status: 400 }
                )
            }
        }

        const post = await prisma.blogPost.update({
            where: { id },
            data: {
                ...validation.data,
                publishedAt: validation.data.status === 'PUBLISHED' ? new Date() : undefined
            }
        })

        return NextResponse.json(post)
    } catch (error) {
        console.error('Error updating blog post:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// DELETE /api/admin/blog/[id] - Soft delete blog post
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        await prisma.blogPost.update({
            where: { id: parseInt(params.id) },
            data: { deletedAt: new Date() }
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error deleting blog post:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
