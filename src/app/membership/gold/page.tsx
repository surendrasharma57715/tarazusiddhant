import React from 'react'
import { Metadata } from 'next'
import GoldPlanContent from '@/components/plans/GoldPlanContent'

export const metadata: Metadata = {
    title: 'Gold Membership | Tarazu Siddhant - Become a Professional Trader',
    description: 'Join the Gold Membership at Tarazu Siddhant. Master advanced technical analysis, option chain, and intraday strategies in 6 months. For serious traders.',
    keywords: ['advanced trading course', 'option chain analysis', 'intraday strategies', 'gold membership', 'tarazu siddhant', 'professional trading india'],
    openGraph: {
        title: 'Gold Membership - Tarazu Siddhant',
        description: 'Advanced trading mastery for professional results. Master the market methodology.',
        images: ['/images/membership/gold-og.jpg'],
    }
}

const GoldPlanPage = () => {
    return <GoldPlanContent />
}

export default GoldPlanPage
