import React from 'react'
import { Metadata } from 'next'
import DiamondPlanContent from '@/components/plans/DiamondPlanContent'

export const metadata: Metadata = {
    title: 'Diamond Membership | Tarazu Siddhant - Elite Mentorship Circle',
    description: 'Join the Diamond Membership at Tarazu Siddhant. Premium 1-on-1 mentorship, personal class, and VIP support for those seeking ultimate trading mastery.',
    keywords: ['trading mentorship', '1-on-1 trading class', 'vip trading circle', 'diamond membership', 'tarazu siddhant', 'elite trading coaching'],
    openGraph: {
        title: 'Diamond Membership - Tarazu Siddhant',
        description: 'Elite 1-on-1 mentorship for ultimate market mastery. Your path to professional excellence.',
        images: ['/images/membership/diamond-og.jpg'],
    }
}

const DiamondPlanPage = () => {
    return <DiamondPlanContent />
}

export default DiamondPlanPage
