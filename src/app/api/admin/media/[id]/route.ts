import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { supabase } from '@/lib/supabase'

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const id = parseInt(params.id)
        if (isNaN(id)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
        }

        // 1. Get media info from DB
        const media = await prisma.media.findUnique({
            where: { id }
        })

        if (!media) {
            return NextResponse.json({ error: 'Media not found' }, { status: 404 })
        }

        // 2. Delete from Supabase Storage
        const { error: storageError } = await supabase.storage
            .from('blog-images')
            .remove([media.filename])

        if (storageError) {
            console.error('Supabase storage error:', storageError)
            return NextResponse.json({ error: 'Failed to delete from storage', details: storageError.message }, { status: 500 })
        }

        // 3. Delete from Database
        await prisma.media.delete({
            where: { id }
        })

        return NextResponse.json({ success: true, message: 'Media deleted successfully' })

    } catch (error: any) {
        console.error('Error deleting media:', error)
        return NextResponse.json({
            error: 'Internal server error',
            message: error.message
        }, { status: 500 })
    }
}
