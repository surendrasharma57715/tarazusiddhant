import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const category = searchParams.get('category')
        const search = searchParams.get('q')

        const where: any = {
            status: 'PUBLISHED',
            deletedAt: null
        }

        if (category && category !== 'All') {
            where.category = {
                name: category
            }
        }

        if (search) {
            where.OR = [
                { title: { contains: search } },
                { excerpt: { contains: search } },
            ]
        }

        const posts = await prisma.blogPost.findMany({
            where,
            orderBy: {
                publishedAt: 'desc'
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

        return NextResponse.json(posts)
    } catch (error: any) {
        console.error('Error fetching blogs:', error)
        return NextResponse.json({
            error: 'Internal server error',
            message: error.message,
            stack: error.stack
        }, { status: 500 })
    }
}
