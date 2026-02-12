'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TrendingUp, Users, Award, CheckCircle2, DollarSign, BarChart3, ArrowUpRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        {/* 
                           FIX: Replaced motion.div with standard div to ensure 
                           content is visible immediately (optimized for LCP).
                        */}
                        <div className="animate-fade-in-up">
                            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                                #1 Best Stock Market Institute in India
                            </span>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading mb-6 leading-[1.2] tracking-tight">
                                Master the Art of <span className="text-primary">Intraday Trading</span> & Option Chain
                            </h1>
                            <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                                Learn the exclusive <span className="font-bold text-primary">Tarazu Siddhant (Option Chain Tarazu Principle)</span> from expert mentor Surendra Kumar Sharma. Transform your financial future with 95% success rate strategies.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                                <Link
                                    href="https://academy.tarajusiddhant.com/memberships"
                                    target="_blank"
                                    className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-700 transition-all duration-300 shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Start Your Journey <TrendingUp className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="https://academy.tarajusiddhant.com/courses"
                                    target="_blank"
                                    className="px-8 py-4 bg-white text-primary border-2 border-primary font-bold rounded-full hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    View Our Courses
                                </Link>
                            </div>

                            {/* Trust Points */}
                            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                                <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" /> Live Market Practice
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" /> 2000+ Students Trained
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" /> 95% Success Rate
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" /> Online & Offline Batches
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image/Graphic */}
                    <div className="lg:w-1/2 relative flex justify-center items-center py-10 lg:py-0">
                        <div
                            className="relative w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px]"
                        >
                            {/* Rotating Dotted Circle - CSS Animation */}
                            {/* FIX: Used CSS animation 'animate-[spin_25s_linear_infinite]' instead of Framer Motion for better perf */}
                            <div className="absolute inset-0 border-2 border-dashed border-primary/40 rounded-full animate-[spin_25s_linear_infinite]">
                                {/* Trading Icons on the dotted line */}
                                {[
                                    { icon: <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6" />, pos: 0 },
                                    { icon: <DollarSign className="w-4 h-4 sm:w-6 sm:h-6" />, pos: 60 },
                                    { icon: <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6" />, pos: 120 },
                                    { icon: <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6" />, pos: 180 },
                                    { icon: <Award className="w-4 h-4 sm:w-6 sm:h-6" />, pos: 240 },
                                    { icon: <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6" />, pos: 300 },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="absolute w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary z-20 border border-primary/20 cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 animate-[spin_25s_linear_infinite_reverse]"
                                        style={{
                                            top: `${50 + 50 * Math.sin((item.pos) * (Math.PI / 180))}%`,
                                            left: `${50 + 50 * Math.cos((item.pos) * (Math.PI / 180))}%`,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <div className="origin-center rotate-0">
                                            {item.icon}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Inner Glow Circle */}
                            <div className="absolute inset-4 sm:inset-6 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl -z-10 animate-pulse"></div>

                            {/* Mentor Image Circle */}
                            <div className="absolute inset-4 sm:inset-6 rounded-full overflow-hidden border-[6px] sm:border-[10px] border-white shadow-2xl z-10 bg-gray-100 group">
                                <Image
                                    src="/images/surendra-sharma.jpg"
                                    alt="Surendra Kumar Sharma - Tarazu Siddhant"
                                    fill
                                    priority
                                    className="object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-4 sm:p-6 text-white text-center pb-6 sm:pb-12">
                                    <div className="bg-primary px-3 py-1 rounded-full mb-2 flex items-center gap-1.5 shadow-lg border border-white/20 scale-90 sm:scale-100">
                                        <Award className="w-3 h-3 text-white" />
                                        <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white">Expert Mentor</span>
                                    </div>
                                    <p className="font-bold text-[10px] sm:text-base mb-0.5">Surendra Kumar Sharma</p>
                                    <p className="text-[8px] sm:text-[11px] opacity-90">Founder, Tarazu Siddhant</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
