import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Gallery - Tarazu Siddhant Academy',
    description: 'Explore the journey of Tarazu Siddhant Academy. View photos from our expert trading sessions, live market workshops, and community success events.',
    keywords: 'trading gallery, stock market photos, trading education images, Tarazu Siddhant events, trading workshops',
}

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
