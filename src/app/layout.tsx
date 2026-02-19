import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Tarazu Siddhant - Best Trading Course in Jaipur | LTP Calculator Online',
    description: 'Master the Option Chain Tarazu Principle with Surendra Kumar Sharma. Join Tarazu Siddhant Academy for the best stock market course and Intraday strategies in Jaipur. Free LTP Calculator tool available.',
    keywords: 'LTP Calculator, LTP Calculator Online, Free LTP Calculator, LTP Calculator for Intraday, Trading LTP Calculator India, LTP Calculator Tool, Advanced LTP Calculator, Best LTP Calculator India, LTP Calculator Jaipur, Tarazu Siddhant, Tarazu Siddhant Trading Course, Tarazu Siddhant Academy, Tarazu Siddhant Jaipur, Tarazu Siddhant Stock Market Course, Tarazu Siddhant Intraday Strategy, Tarazu Siddhant Classes Jaipur, Tarazu Siddhant Office Jaipur, Tarazu Siddhant Trading Institute, Join Tarazu Siddhant Course, Taraju Siddhant, Taraju Siddhant Trading Course, Taraju Siddhant Academy, option chain analysis, trading education',
    authors: [{ name: 'Surendra Kumar Sharma' }],
    icons: {
        icon: '/favicon.svg',
    },
    openGraph: {
        title: 'Tarazu Siddhant - Best Trading Education Mentor',
        description: 'Learn stock market trading with Tarazu Siddhant Academy. Master Option Chain analysis and use our LTP Calculator Tool.',
        url: 'https://tarajusiddhant.com',
        siteName: 'Tarazu Siddhant Academy',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tarazu Siddhant - Trading Education Mentor & LTP Calculator',
        description: 'Learn stock market trading with expert guidance and advanced tools.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    )
}
