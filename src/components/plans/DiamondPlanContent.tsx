'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Shield, Star, Zap, ArrowRight, BookOpen, Users, Target, BarChart3, Clock, Play, Crown, Diamond, MessageSquare, UserCheck, Video } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const DiamondPlanContent = () => {
    const features = [
        {
            title: "VIP 1-on-1 Mentorship",
            description: "Personalized sessions with Siddhanth sir to refine your trading style and psychology.",
            icon: UserCheck,
            color: "bg-primary"
        },
        {
            title: "VIP Mentorship Circle",
            description: "Access to our most exclusive community where elite traders share high-signal insights.",
            icon: Crown,
            color: "bg-purple-600"
        },
        {
            title: "Everything in Gold",
            description: "Includes all features of Silver and Gold plans, plus all future course updates.",
            icon: Diamond,
            color: "bg-blue-600"
        },
        {
            title: "45-Min Weekly Sessions",
            description: "Dedicated weekly calls to review your trades and fix execution errors.",
            icon: Video,
            color: "bg-indigo-600"
        },
        {
            title: "Live & Recorded Classes",
            description: "Watch live or review the highest quality recordings of every single session we ever hold.",
            icon: Play,
            color: "bg-pink-600"
        },
        {
            title: "24/7 VIP Support",
            description: "Direct line to our core mentors for immediate resolution of your trading queries.",
            icon: MessageSquare,
            color: "bg-cyan-600"
        }
    ]

    const curriculum = [
        "Personalized Trading Blueprint",
        "Mastering Institutional Order Flow",
        "Proprietary Hedging Techniques",
        "Advanced Psychology & Mindset",
        "Portfolio Diversification Strategy",
        "Legacy Wealth Building Systems",
        "Direct Trade Review & Audit",
        "Zero-Line Trading Methodology"
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px]"></div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-bold tracking-wide uppercase mb-6 border border-primary/20">
                                <Star className="w-4 h-4 text-primary" /> Elite Mentorship
                            </span>
                            <h1 className="text-4xl md:text-7xl font-extrabold text-heading mb-6 tracking-tight leading-tight text-text-primary">
                                The Ultimate Path with the <span className="text-primary italic">Diamond Plan</span>
                            </h1>
                            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                                Reserved for the most dedicated. Get personalized 1-on-1 guidance, weekly reviews, and join the inner circle of professional traders.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="https://academy.tarajusiddhant.com/memberships"
                                    className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-700 transition-all duration-300 shadow-xl shadow-primary/20 flex items-center gap-2"
                                >
                                    Join Diamond Membership <ArrowRight className="w-5 h-5" />
                                </Link>
                                <span className="text-sm font-semibold text-text-secondary">Limited to 50 active mentees only</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-primary">Elite Diamond Features</h2>
                        <p className="text-text-secondary">Exclusive access and personalized training designed for market mastery.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                            >
                                <div className={`w-14 h-14 ${feature.color} text-white rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform shadow-lg`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-text-primary">{feature.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-primary">Elite Mentorship Path</h2>
                            <p className="text-text-secondary mb-10 leading-relaxed">
                                Our Diamond Plan isn&apos;t just a course—it&apos;s a partnership. We work closely with you to identify your unique psychological blocks and build a system that works for your life.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {curriculum.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-sm font-semibold text-text-primary">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative w-full">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-primary to-purple-800 p-1 rounded-[3rem] shadow-2xl overflow-hidden shadow-primary/30"
                            >
                                <div className="bg-dark rounded-[2.8rem] p-8 md:p-10 text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                                <Crown className="text-amber-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white">Elite Mentorship</h4>
                                                <p className="text-gray-400 text-sm">6 Months VIP Track</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6 mb-10">
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-gray-300">Enrollment Fee</span>
                                                <span className="text-2xl font-bold text-white">₹41,555</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-gray-300">Validity</span>
                                                <span className="font-bold text-white">180 Days (6 Months)</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-gray-300">Direct Support</span>
                                                <span className="font-bold text-white">Personal 1-on-1 Support</span>
                                            </div>
                                        </div>

                                        <Link
                                            href="https://academy.tarajusiddhant.com/memberships"
                                            className="w-full py-5 bg-white text-dark font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all text-lg shadow-xl"
                                        >
                                            BUY DIAMOND PLAN NOW <ArrowRight size={22} />
                                        </Link>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default DiamondPlanContent
