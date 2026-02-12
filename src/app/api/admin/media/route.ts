import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

// GET /api/admin/media - List all media
export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const media = await prisma.media.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                uploader: {
                    select: { username: true }
                }
            }
        })

        return NextResponse.json(media)
    } catch (error) {
        console.error('Error fetching media:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
