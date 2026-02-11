import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

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
    title: 'Tarazu Siddhant - Trading Education Mentor | Option Chain Tarazu Principle',
    description: 'Learn stock market trading with Surendra Kumar Sharma. Master Option Chain analysis, intraday trading, and risk management with 95% success rate. Join 2000+ successful students.',
    keywords: 'trading education, option chain analysis, taraju siddhant, stock market courses, intraday trading, nifty trading, trading mentor',
    authors: [{ name: 'Surendra Kumar Sharma' }],
    openGraph: {
        title: 'Tarazu Siddhant - Trading Education Mentor',
        description: 'Learn stock market trading with expert guidance. Master Option Chain Tarazu Principle.',
        url: 'https://tarajusiddhant.com',
        siteName: 'Tarazu Siddhant Academy',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tarazu Siddhant - Trading Education Mentor',
        description: 'Learn stock market trading with expert guidance',
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
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    )
}
