import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { updatePasswordSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session || !session.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const result = updatePasswordSchema.safeParse(body)

        if (!result.success) {
            return NextResponse.json({
                error: 'Validation failed',
                details: result.error.flatten().fieldErrors
            }, { status: 400 })
        }

        const { currentPassword, newPassword } = result.data
        const adminId = parseInt((session.user as any).id)

        // 1. Get current admin record
        const admin = await prisma.admin.findUnique({
            where: { id: adminId }
        })

        if (!admin) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        // 2. Verify current password
        const isPasswordMatch = await bcrypt.compare(currentPassword, admin.password)
        if (!isPasswordMatch) {
            return NextResponse.json({ error: 'Incorrect current password' }, { status: 400 })
        }

        // 3. Hash new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 12)

        // 4. Update password in DB
        await prisma.admin.update({
            where: { id: adminId },
            data: { password: hashedNewPassword }
        })

        return NextResponse.json({ success: true, message: 'Password updated successfully' })

    } catch (error: any) {
        console.error('Error updating password:', error)
        return NextResponse.json({
            error: 'Internal server error',
            message: error.message
        }, { status: 500 })
    }
}
