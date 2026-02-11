import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const leads = await prisma.lead.findMany({
            orderBy: { createdAt: 'desc' },
        })

        // Generate CSV content
        const headers = ['ID', 'Name', 'Email', 'Phone', 'Message', 'Status', 'Source', 'Created At']
        const csvRows = [headers.join(',')]

        leads.forEach(lead => {
            const row = [
                lead.id,
                `"${lead.name.replace(/"/g, '""')}"`,
                `"${lead.email.replace(/"/g, '""')}"`,
                `"${(lead.phone || '').replace(/"/g, '""')}"`,
                `"${lead.message.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                lead.status,
                `"${(lead.source || '').replace(/"/g, '""')}"`,
                lead.createdAt.toISOString()
            ]
            csvRows.push(row.join(','))
        })

        const csvString = csvRows.join('\n')

        // Return as file download
        return new NextResponse(csvString, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': 'attachment; filename=leads_export.csv'
            }
        })
    } catch (error) {
        console.error('Error exporting leads:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
