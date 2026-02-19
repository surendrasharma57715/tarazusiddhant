import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { supabase } from '@/lib/supabase'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const formData = await request.formData()
        const file = formData.get('file') as File

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json({ error: 'Invalid file type. Only images are allowed.' }, { status: 400 })
        }

        // Validate file size (300KB)
        if (file.size > 300 * 1024) {
            return NextResponse.json({ error: 'File too large. Max size is 300KB.' }, { status: 400 })
        }

        const buffer = Buffer.from(await file.arrayBuffer())
        const ext = path.extname(file.name)
        const filename = `${uuidv4()}${ext}`

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
            .from('blog-images')
            .upload(filename, buffer, {
                contentType: file.type,
                cacheControl: '3600',
                upsert: false
            })

        if (error) {
            console.error('Supabase upload error:', error)
            return NextResponse.json({ error: 'Failed to upload to storage', details: error.message }, { status: 500 })
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from('blog-images')
            .getPublicUrl(filename)

        // Create media record in DB
        const media = await prisma.media.create({
            data: {
                filename: filename,
                originalName: file.name,
                filePath: publicUrl,
                fileSize: file.size,
                mimeType: file.type,
                uploadedBy: parseInt((session.user as any).id)
            }
        })

        return NextResponse.json({
            url: publicUrl,
            media
        }, { status: 201 })

    } catch (error) {
        console.error('Error uploading media:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
