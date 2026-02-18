import React from 'react'
import { Metadata } from 'next'
import SilverPlanContent from '@/components/plans/SilverPlanContent'

export const metadata: Metadata = {
    title: 'Silver Membership | Tarazu Siddhant - Start Your Trading Journey',
    description: 'Join the Silver Membership at Tarazu Siddhant. Master the basics of stock market, technical analysis, and the Tarazu Principle in 3 months. Perfect for beginners.',
    keywords: ['trading course', 'stock market beginners', 'silver membership', 'tarazu siddhant', 'trading for beginners', 'technical analysis india'],
    openGraph: {
        title: 'Silver Membership - Tarazu Siddhant',
        description: 'Professional trading foundation for beginners. Master the market methodology.',
        images: ['/images/membership/silver-og.jpg'],
    }
}

const SilverPlanPage = () => {
    return <SilverPlanContent />
}

export default SilverPlanPage
