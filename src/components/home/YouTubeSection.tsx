'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Play, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const videos = [
    {
        id: 'p_1xLmWJ6pI',
        title: 'LTP Calculator Live Market Strategy',
        label: 'Surendra Sharma'
    },
    {
        id: '0fTQDZ3c-MY',
        title: 'AI vs Tarazu Siddhant Comparison',
        label: 'Market Expert'
    },
    {
        id: 'P3fw2Y7c-pc',
        title: 'LTP Calculator Deep Dive',
        label: 'Option Chain Specialist'
    },
    {
        id: '9zs80cpC8XU',
        title: 'Mastering Tarazu Principle',
        label: 'Trading Mentor'
    }
]

const YouTubeSection = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <TrendingUp size={400} className="absolute -bottom-20 -right-20 -rotate-12" />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black tracking-[0.2em] uppercase mb-4 border border-primary/20">
                            Learning Hub
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-heading mb-4 uppercase tracking-tight">
                            Market <span className="text-primary">Insights</span> & Strategies
                        </h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                        <p className="text-text-secondary font-bold text-sm tracking-wide uppercase opacity-70">
                            Watch our latest market analysis and educational videos
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {videos.map((video, idx) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-dark">
                                {/* Video Thumbnail */}
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

                                {/* Channel Info Top */}
                                <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                            <TrendingUp className="text-white w-4 h-4" />
                                        </div>
                                        <span className="text-white text-xs font-bold tracking-tight">Tarazu Siddhant</span>
                                    </div>
                                    <div className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm">
                                        <Play className="text-white w-3 h-3 fill-current" />
                                    </div>
                                </div>

                                {/* Center Play Button */}
                                <Link
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform group-hover:scale-90 transition-transform duration-300">
                                            <Play className="text-primary w-6 h-6 fill-current ml-1" />
                                        </div>
                                    </div>
                                </Link>

                                {/* Bottom Info */}
                                <div className="absolute bottom-8 left-6 right-6 text-center pointer-events-none">
                                    <div className="bg-white/90 backdrop-blur-md rounded-2xl py-3 px-4 shadow-xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-primary font-black text-xs uppercase tracking-wider">{video.label}</span>
                                    </div>
                                    <p className="text-white text-[10px] font-bold tracking-widest uppercase opacity-60">tarajusiddhant.com</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="https://www.youtube.com/@LTP1977"
                        target="_blank"
                        className="inline-flex items-center px-8 py-4 md:px-12 md:py-5 bg-primary text-white font-black rounded-full hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 uppercase tracking-widest text-xs md:text-sm"
                    >
                        View More on YouTube
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default YouTubeSection
