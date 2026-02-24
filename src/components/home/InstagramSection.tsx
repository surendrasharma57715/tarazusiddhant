'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, TrendingUp, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const reels = [
    {
        id: 'reel1',
        title: 'Mastering the Tarazu Principle',
        likes: '1.2k',
        comments: '85',
        thumbnail: 'https://images.unsplash.com/photo-1611974714851-48206138d731?w=800&q=80'
    },
    {
        id: 'reel2',
        title: 'Daily Market Reverse Strategy',
        likes: '950',
        comments: '42',
        thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80'
    },
    {
        id: 'reel3',
        title: 'Option Chain Magic Explained',
        likes: '2.5k',
        comments: '120',
        thumbnail: 'https://images.unsplash.com/photo-1642790103517-135506ae9994?w=800&q=80'
    },
    {
        id: 'reel4',
        title: 'Risk Management Tips',
        likes: '1.8k',
        comments: '64',
        thumbnail: 'https://images.unsplash.com/photo-1611095777215-320e8354c259?w=800&q=80'
    }
]

const InstagramSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                <Instagram size={400} className="absolute -top-20 -left-20 rotate-12" />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-600 text-xs font-black tracking-[0.2em] uppercase mb-4 border border-pink-500/20">
                            Social Stream
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-heading mb-4 uppercase tracking-tight">
                            Latest from <span className="text-pink-600">Instagram</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-text-secondary font-bold text-sm tracking-wide uppercase opacity-70">
                            Get quick trading tips and updates on our Instagram Reels
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {reels.map((reel, idx) => (
                        <motion.div
                            key={reel.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-dark">
                                {/* Reel Thumbnail */}
                                <img
                                    src={reel.thumbnail}
                                    alt={reel.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

                                {/* Instagram Icon Top */}
                                <div className="absolute top-6 right-6">
                                    <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                                        <Instagram className="text-white w-5 h-5 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Likes & Comments Overlay */}
                                <div className="absolute top-6 left-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                        <Heart className="w-3 h-3 text-pink-500 fill-current" />
                                        <span className="text-white text-[10px] font-bold">{reel.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                        <MessageCircle className="w-3 h-3 text-blue-400 fill-current" />
                                        <span className="text-white text-[10px] font-bold">{reel.comments}</span>
                                    </div>
                                </div>

                                {/* Click Overlay */}
                                <Link
                                    href="https://www.instagram.com/tarajusiddhant.com_"
                                    target="_blank"
                                    className="absolute inset-0 flex items-end p-8"
                                >
                                    <div className="w-full">
                                        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-heading font-black text-xs line-clamp-1 mb-1">{reel.title}</p>
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-orange-500 to-pink-600 flex items-center justify-center">
                                                    <Instagram className="text-white w-2 h-2" />
                                                </div>
                                                <span className="text-pink-600 font-bold text-[10px] uppercase tracking-wider">Watch Reel</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="https://www.instagram.com/tarajusiddhant.com_"
                        target="_blank"
                        className="inline-flex items-center px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-pink-600 to-orange-500 text-white font-black rounded-full hover:shadow-2xl hover:shadow-pink-500/20 transition-all transform hover:-translate-y-1 uppercase tracking-widest text-xs md:text-sm"
                    >
                        Follow on Instagram
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default InstagramSection
