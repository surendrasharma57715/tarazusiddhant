'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Target, Zap, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const AboutSection = () => {
    const features = [
        {
            title: 'Precision Trading',
            description: 'Master the Option Chain Tarazu Principle for high-accuracy entries.',
            icon: Target,
            color: 'bg-primary/10 text-primary'
        },
        {
            title: 'Live Market Rules',
            description: 'Learn strategies that actually work in the live market, not just on backtests.',
            icon: Zap,
            color: 'bg-yellow-500/10 text-yellow-600'
        },
        {
            title: 'Trusted Success',
            description: 'Join over 2000+ students who have transformed their trading journey.',
            icon: ShieldCheck,
            color: 'bg-green-500/10 text-green-600'
        }
    ]

    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Content Area */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-bold tracking-wider uppercase mb-6 border border-primary/10">
                                Who We Are
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading mb-8 leading-tight">
                                Empowering Traders with the <span className="text-primary italic">Tarazu Principle</span>
                            </h2>
                            <p className="text-base sm:text-lg text-text-secondary mb-8 leading-relaxed">
                                Tarazu Siddhant Academy is not just another trading institute. We have pioneered the
                                <span className="font-bold text-text-primary"> Option Chain Tarazu Principle (OCTP)</span>,
                                a unique methodology developed by Surendra Kumar Sharma that brings a balance
                                (Tarazu) to your trading mindset and strategy.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    '95% Student Success Rate',
                                    'Live Trading Support',
                                    'Advanced Option Chain Analysis',
                                    'Mindset & Psychology Training'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="font-semibold text-text-primary">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all group"
                            >
                                Read Full Story
                                <Target className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Feature Cards Area */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 relative">
                            {/* Decorative badge for cards */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full -z-10 animate-pulse"></div>

                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                                >
                                    <div className={`${feature.color} w-16 h-16 rounded-3xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}

                            {/* Extra CTA Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl shadow-primary/20 flex flex-col justify-center items-center text-center group cursor-pointer border border-white/10"
                            >
                                <div className="text-4xl font-black mb-2 tracking-tighter">OCTP®</div>
                                <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-4">The Golden Strategy</div>
                                <div className="text-sm opacity-90 mb-6">Experience the power of balanced trading rules.</div>
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:w-full transition-all duration-500">
                                    <Target className="w-6 h-6" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
