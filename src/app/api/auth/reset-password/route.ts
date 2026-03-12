import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
    try {
        const { token, password } = await request.json()

        if (!token || !password) {
            return NextResponse.json({ error: 'Token and password are required' }, { status: 400 })
        }

        const admin = await prisma.admin.findFirst({
            where: {
                resetToken: token,
                resetTokenExpiry: {
                    gt: new Date()
                }
            }
        })

        if (!admin) {
            return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await prisma.admin.update({
            where: { id: admin.id },
            data: {
                password: hashedPassword,
                resetToken: null,
                resetTokenExpiry: null
            }
        })

        return NextResponse.json({ message: 'Password reset successfully' })
    } catch (error) {
        console.error('Reset password error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
