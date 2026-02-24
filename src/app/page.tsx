import React from 'react'
import Link from 'next/link'
import { FaGraduationCap } from 'react-icons/fa'
import { Users, TrendingUp } from 'lucide-react'
import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import PricingSection from '@/components/home/PricingSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialSection from '@/components/home/TestimonialSection'
import FAQSection from '@/components/home/FAQSection'
import YouTubeSection from '@/components/home/YouTubeSection'
import InstagramSection from '@/components/home/InstagramSection'

export default function HomePage() {
    const stats = [
        { label: 'Students Trained', value: '2000+', icon: Users, color: 'text-primary' },
        { label: 'Success Rate', value: '95%', icon: TrendingUp, color: 'text-green-500' },
        { label: 'Total Courses', value: '10+', icon: FaGraduationCap, color: 'text-blue-500' },
        { label: 'Market Mentors', value: 'Expert', icon: FaGraduationCap, color: 'text-indigo-500' },
    ]

    return (
        <div className="flex flex-col gap-0">
            <Hero />

            {/* Stats Section */}
            <section className="py-12 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                                <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                                <div className="text-3xl font-bold text-text-primary mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-text-secondary">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AboutSection />
            <PricingSection />
            <WhyChooseUs />
            <TestimonialSection />
            <FAQSection />
            <YouTubeSection />
            <InstagramSection />

            {/* Info Section - CTA to LMS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-[2rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        {/* Background elements */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <TrendingUp size={400} className="absolute -top-20 -left-20 rotate-12" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Become a Pro Trader?</h2>
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 relative z-10">
                            Join Tarazu Siddhant Academy today and get access to exclusive trading strategies and market mentorship.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <Link
                                href="https://academy.tarajusiddhant.com"
                                target="_blank"
                                className="px-6 py-4 md:px-10 md:py-5 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 text-sm md:text-base"
                            >
                                Go to Learning LMS
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-4 md:px-10 md:py-5 bg-transparent border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 text-sm md:text-base"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
