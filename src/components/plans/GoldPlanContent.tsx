'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Shield, Star, Zap, ArrowRight, BookOpen, Users, Target, BarChart3, Clock, Play, GraduationCap, TrendingUp, Presentation } from 'lucide-react'
import Link from 'next/link'

const GoldPlanContent = () => {
    const features = [
        {
            title: "Unlimited Live Classes",
            description: "Full access to all our live trading sessions with real-time market analysis.",
            icon: Play,
            color: "bg-amber-500"
        },
        {
            title: "Advanced Course Library",
            description: "Comprehensive access to all our modules, from basics to advanced pro-level strategies.",
            icon: GraduationCap,
            color: "bg-orange-500"
        },
        {
            title: "Advanced Tarazu Principle",
            description: "Master the complex applications of our signature methodology for consistent profits.",
            icon: BarChart3,
            color: "bg-yellow-600"
        },
        {
            title: "Private Gold Community",
            description: "Direct interaction with senior mentors and professional traders in an exclusive circle.",
            icon: Users,
            color: "bg-amber-600"
        },
        {
            title: "Intraday Special Strategies",
            description: "Exclusive high-probability strategies specifically optimized for daily market volatility.",
            icon: TrendingUp,
            color: "bg-red-500"
        },
        {
            title: "Option Chain Analysis",
            description: "Master the art of reading option chains to predict market moves before they happen.",
            icon: Presentation,
            color: "bg-blue-600"
        }
    ]

    const curriculum = [
        "Advanced Market Structure Mastery",
        "Deep Dive: Option Chain Analysis",
        "Intraday Scalping & Swing Strategies",
        "Pro-Level Technical Indicators",
        "Advanced Risk Management & Hedging",
        "The Complete Tarazu Siddhant Pro",
        "Psychology of Professional Traders",
        "Multi-Timeframe Analysis Secrets"
    ]

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-orange-500/10 rounded-full blur-[80px]"></div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-bold tracking-wide uppercase mb-6 border border-amber-200">
                                <Zap className="w-4 h-4 text-amber-500" /> Premium Membership
                            </span>
                            <h1 className="text-4xl md:text-7xl font-extrabold text-heading mb-6 tracking-tight leading-tight text-text-primary">
                                Level Up to Professional Trading with <span className="text-amber-500 italic">Gold Plan</span>
                            </h1>
                            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                                Our most popular program for those serious about making trading their primary income source. Get advanced tools and specialized intraday strategies.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="https://academy.tarajusiddhant.com/memberships"
                                    className="px-8 py-4 bg-amber-500 text-white font-bold rounded-2xl hover:bg-amber-600 transition-all duration-300 shadow-xl shadow-amber-500/20 flex items-center gap-2"
                                >
                                    Join Gold Membership <ArrowRight className="w-5 h-5" />
                                </Link>
                                <span className="text-sm font-semibold text-text-secondary">Used by 1200+ active traders</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-amber-50/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-primary">Why Choose Gold?</h2>
                        <p className="text-text-secondary">Advanced modules and real-time support for the serious market enthusiast.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 group"
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-primary">Advanced Curriculum</h2>
                            <p className="text-text-secondary mb-10 leading-relaxed">
                                The Gold Plan goes beyond fundamentals. We dive deep into the mechanics of the market, teaching you how to read institutional moves and capitalize on intraday swings.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {curriculum.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100">
                                        <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0">
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
                                className="bg-gradient-to-br from-amber-400 to-orange-600 p-1 rounded-[3rem] shadow-2xl overflow-hidden shadow-amber-500/30"
                            >
                                <div className="bg-dark rounded-[2.8rem] p-8 md:p-10 text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                                <Star className="text-amber-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white">Most Popular Choice</h4>
                                                <p className="text-gray-400 text-sm">6 Months Professional Mastery</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6 mb-10">
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-gray-300">Enrollment Fee</span>
                                                <span className="text-2xl font-bold text-white">₹11,999</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-gray-300">Validity</span>
                                                <span className="font-bold text-white">180 Days (6 Months)</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-gray-300">Support</span>
                                                <span className="font-bold text-white">Priority Gold Community</span>
                                            </div>
                                        </div>

                                        <Link
                                            href="https://academy.tarajusiddhant.com/memberships"
                                            className="w-full py-5 bg-white text-dark font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all text-lg shadow-xl"
                                        >
                                            BUY GOLD PLAN NOW <ArrowRight size={22} />
                                        </Link>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default GoldPlanContent
