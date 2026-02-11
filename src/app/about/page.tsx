'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Award, Users, TrendingUp, Shield, BookOpen, Quote } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white pt-40 pb-16">
            {/* 1. Hero Section */}
            <section className="relative mb-24">
                <div className="container mx-auto px-4">
                    <div className="relative rounded-[3rem] overflow-hidden bg-gray-900 h-[600px] flex items-center">
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/images/img4.jpeg"
                                alt="Trading Office"
                                className="w-full h-full object-cover opacity-80 scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                        </div>

                        <div className="relative z-10 p-8 md:p-20 max-w-3xl">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest rounded-lg mb-6 backdrop-blur-md"
                            >
                                Est. 2018
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tight drop-shadow-2xl"
                            >
                                Balancing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Scales</span> of the Market
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg md:text-xl text-white leading-relaxed max-w-2xl font-medium drop-shadow-lg"
                            >
                                Tarazu Siddhant Academy is dedicated to decoding the hidden language of Option Chains. We don&apos;t just teach trading; we teach you how to think like an institution.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The Founder Section */}
            <section className="mb-32 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
                        >
                            {/* Placeholder for Founder Image */}
                            <img
                                src="/images/surendra-sharma.jpg"
                                alt="Surendra Kumar Sharma"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                        {/* Decorative Elements */}
                        <div className="absolute top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-[2.5rem] -z-0 hidden lg:block"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The Visionary</h3>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                Surendra Kumar Sharma
                            </h2>
                            <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8 bg-gray-50 rounded-r-xl">
                                <p className="text-lg italic text-gray-700 font-medium">
                                    &quot;The market is not random. It&apos;s a mathematically balanced system. Once you learn to read the scale (Tarazu), you stop gambling and start trading.&quot;
                                </p>
                            </blockquote>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    With over 15 years of experience in the Indian derivatives market, Surendra Kumar Sharma founded Tarazu Siddhant Academy with a single mission: to demystify Option Chain analysis for the retail trader.
                                </p>
                                <p>
                                    Unlike traditional technical analysis that relies on lagging indicators, his proprietary <strong>Option Chain Tarazu Principle (OCTP)</strong> focuses on real-time data interpretation, giving students an edge before the price even moves on the chart.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div>
                                    <h4 className="text-3xl font-black text-gray-900 mb-1">2000+</h4>
                                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Students Mentored</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-black text-gray-900 mb-1">15+ Years</h4>
                                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Market Experience</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Trust & Certification Section */}
            <section className="mb-32 container mx-auto px-4">
                <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Content Side */}
                        <div className="lg:w-1/2 p-10 md:p-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest rounded-lg mb-6">
                                    Verified Professional
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                                    Trust Through <br />
                                    <span className="text-primary italic">Authentication</span>
                                </h2>
                                <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                                    At Tarazu Siddhant Academy, we believe in radical transparency. Our methodology is backed by professional certifications and years of market expertise, ensuring you learn from a <span className="text-white font-medium">NISM Certified</span> professional.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "SEBI Registered Framework", desc: "Our teaching aligns with the strict regulatory standards of the Indian markets." },
                                        { title: "NISM Certified Expertise", desc: "Validated knowledge in Equity Derivatives and Option Strategy analysis." },
                                        { title: "Institutional Grade Analysis", desc: "Professional quality tools and principles used by market makers." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-5">
                                            <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-primary">
                                                <Shield className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Image Side */}
                        <div className="lg:w-1/2 p-8 lg:p-16 flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", damping: 20 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src="/images/nism.jpg"
                                    alt="NISM Certification - Surendra Kumar Sharma"
                                    className="relative z-10 w-full max-w-lg rounded-3xl shadow-2xl border-4 border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
                                />
                                {/* Bottom Badge */}
                                <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block border border-gray-100">
                                    <Award className="w-10 h-10 text-primary mb-2" />
                                    <div className="text-gray-900 font-black text-sm uppercase mb-1">Authenticated</div>
                                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">NISM Certified Mentor</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. The Tarazu Principle (OCTP) */}
            <section className="mb-32 bg-gray-50 py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Our Core Philosophy</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                            What is the <span className="text-primary">Tarazu Principle?</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            A revolutionary approach to analyzing market sentiment by weighing the conviction of buyers versus sellers in real-time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Data Over Noise",
                                description: "We ignore news rumors and focus strictly on Open Interest (OI) buildup and volume clusters."
                            },
                            {
                                icon: TrendingUp,
                                title: "Momentum Capture",
                                description: "Identify the exact moment when the 'scale' tips, allowing for high-probability sniper entries."
                            },
                            {
                                icon: Shield,
                                title: "Risk Equilibrium",
                                description: "Just like a balanced scale, we ensure your risk-to-reward ratio is always tilted in your favor."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                            >
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    )
}
