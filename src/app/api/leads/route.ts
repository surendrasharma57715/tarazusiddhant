import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { createLeadSchema, paginationSchema } from '@/lib/validation'
import { sanitizeInput } from '@/lib/security'

// GET /api/leads - List all leads with pagination and search
export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { searchParams } = new URL(request.url)
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '20')
        const search = searchParams.get('q') || ''
        const status = searchParams.get('status') || ''

        const skip = (page - 1) * limit

        const where: any = {}

        if (search) {
            where.OR = [
                { name: { contains: search } },
                { email: { contains: search } },
                { phone: { contains: search } },
            ]
        }

        if (status && status !== 'ALL') {
            where.status = status
        }

        const [leads, total] = await Promise.all([
            prisma.lead.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            prisma.lead.count({ where }),
        ])

        return NextResponse.json({
            leads,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        })
    } catch (error) {
        console.error('Error fetching leads:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// POST /api/leads - Create new lead (public endpoint for contact forms)
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate input
        const validation = createLeadSchema.safeParse(body)
        if (!validation.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: validation.error.errors },
                { status: 400 }
            )
        }

        // Sanitize input
        const sanitized = sanitizeInput(validation.data)

        // Create lead
        const lead = await prisma.lead.create({
            data: {
                name: sanitized.name,
                email: sanitized.email,
                phone: sanitized.phone || null,
                message: sanitized.message,
                source: sanitized.source || 'Website Contact Form',
                status: 'PENDING',
            },
        })

        return NextResponse.json({ success: true, lead }, { status: 201 })
    } catch (error) {
        console.error('Error creating lead:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
