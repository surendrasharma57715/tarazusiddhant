import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 })
        }

        const admin = await prisma.admin.findUnique({
            where: { email }
        })

        if (!admin) {
            // Return success even if admin doesn't exist for security
            return NextResponse.json({ message: 'Reset link sent if account exists' })
        }

        const token = uuidv4()
        const expiry = new Date(Date.now() + 3600000) // 1 hour

        await prisma.admin.update({
            where: { id: admin.id },
            data: {
                resetToken: token,
                resetTokenExpiry: expiry
            }
        })

        // TODO: Send actual email here
        // For now, we log the token for development
        console.log(`🔑 Password reset token for ${email}: ${token}`)
        console.log(`🔗 Reset link: ${process.env.NEXT_PUBLIC_APP_URL}/admin/reset-password?token=${token}`)

        return NextResponse.json({ message: 'Reset link sent if account exists' })
    } catch (error) {
        console.error('Forgot password error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
