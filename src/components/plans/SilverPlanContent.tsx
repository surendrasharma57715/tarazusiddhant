'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Shield, Star, Zap, ArrowRight, BookOpen, Users, Target, BarChart3, Clock, Play } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SilverPlanContent = () => {
    const features = [
        {
            title: "Basic Live Classes",
            description: "Join interactive live sessions where we break down market movements in real-time.",
            icon: Play,
            color: "bg-blue-500"
        },
        {
            title: "Master the Fundamentals",
            description: "Comprehensive modules covering everything from market structure to technical analysis basics.",
            icon: BookOpen,
            color: "bg-purple-500"
        },
        {
            title: "Tarazu Principle Basics",
            description: "Exclusive introduction to our signature methodology for balanced and disciplined trading.",
            icon: BarChart3,
            color: "bg-indigo-500"
        },
        {
            title: "Private Community",
            description: "Connect with fellow students and mentors in our dedicated Silver support group.",
            icon: Users,
            color: "bg-green-500"
        },
        {
            title: "Core Trading Strategies",
            description: "Learn 3 proven strategies specifically designed for beginners to ensure safe market entry.",
            icon: Target,
            color: "bg-red-500"
        },
        {
            title: "3 Months Access",
            description: "Full access to all silver content and community for a complete quarter.",
            icon: Clock,
            color: "bg-amber-500"
        }
    ]

    const curriculum = [
        "Stock Market Ecosystem & Players",
        "Japanese Candlestick Patterns 101",
        "Support & Resistance Identification",
        "Trend Analysis & Market Cycles",
        "Introduction to Options Trading",
        "The Core Tarazu Siddhant Philosophy",
        "Risk-to-Reward Ratio Fundamentals",
        "Building a Trading Journal"
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
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
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-bold tracking-wide uppercase mb-6 border border-gray-200">
                                <Shield className="w-4 h-4 text-gray-400" /> Professional Membership
                            </span>
                            <h1 className="text-4xl md:text-7xl font-extrabold text-heading mb-6 tracking-tight leading-tight text-text-primary">
                                Launch Your Trading Career with the <span className="text-primary italic">Silver Plan</span>
                            </h1>
                            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                                The perfect foundation for aspiring traders. Master the Tarazu Siddhant methodology and start trading with confidence and discipline.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="https://academy.tarajusiddhant.com/memberships"
                                    className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-700 transition-all duration-300 shadow-xl shadow-primary/20 flex items-center gap-2"
                                >
                                    Join Silver Membership <ArrowRight className="w-5 h-5" />
                                </Link>
                                <span className="text-sm font-semibold text-text-secondary">Used by 500+ budding traders</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-primary">What&apos;s Included in Silver?</h2>
                        <p className="text-text-secondary">Everything you need to build a rock-solid foundation in the markets.</p>
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-primary">Curriculum Overview</h2>
                            <p className="text-text-secondary mb-10 leading-relaxed">
                                Our Silver Plan is structured to take you from a total beginner to someone who can analyze the market independently using the Tarazu Siddhant framework.
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
                                                <Star className="text-amber-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white">Standard Value</h4>
                                                <p className="text-gray-400 text-sm">3 Months Professional Track</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6 mb-10">
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-gray-300">Enrollment Fee</span>
                                                <span className="text-2xl font-bold text-white">₹7,299</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-gray-300">Validity</span>
                                                <span className="font-bold text-white">90 Days (3 Months)</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-gray-300">Support</span>
                                                <span className="font-bold text-white">24/7 Community</span>
                                            </div>
                                        </div>

                                        <Link
                                            href="https://academy.tarajusiddhant.com/memberships"
                                            className="w-full py-5 bg-white text-dark font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all text-lg shadow-xl"
                                        >
                                            BUY SILVER PLAN NOW <ArrowRight size={22} />
                                        </Link>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Hint */}
            <section className="py-20 bg-dark text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-white">Need More Advanced Training?</h2>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                        Check out our Gold and Diamond plans for advanced option chain analysis, intraday strategies, and one-on-one mentorship sessions.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/#pricing" className="text-primary font-bold hover:underline flex items-center gap-2 transition-all">
                            Compare All Plans <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default SilverPlanContent
