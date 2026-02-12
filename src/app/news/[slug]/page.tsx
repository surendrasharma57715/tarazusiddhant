'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Tag, Share2, Clock, Loader2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPostPage() {
    const params = useParams()
    const slug = params?.slug as string
    const [post, setPost] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (slug) {
            fetchPost()
        }
    }, [slug])

    const fetchPost = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`/api/blog/${slug}`)
            if (res.ok) {
                const data = await res.json()
                setPost(data)
            }
        } catch (error) {
            console.error('Error fetching blog post:', error)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Loading Article...</p>
            </div>
        )
    }

    if (!post) {
        return (
            <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase">Post Not Found</h1>
                <p className="text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                <Link
                    href="/news"
                    className="flex items-center gap-2 text-primary font-bold hover:underline"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to All News
                </Link>
            </div>
        )
    }

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt || post.title,
                    url: window.location.href,
                })
            } catch (error) {
                console.log('Error sharing:', error)
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href)
            alert('Link copied to clipboard!')
        }
    }

    return (
        <div className="min-h-screen bg-white pb-16">
            {/* Post Header / Hero */}
            <div className="relative h-[60vh] min-h-[500px] w-full mb-12 overflow-hidden shadow-2xl mt-20">
                <img
                    src={post.featuredImage || '/blog_placeholder.png'}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <span className="inline-block px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-wider rounded-lg mb-6 shadow-lg">
                                {post.category?.name || 'News'}
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-bold uppercase tracking-widest">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                                <span className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-primary" />
                                    {post.author?.username}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" />
                                    8 min read
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Back Button Overlay */}
                <div className="absolute top-8 left-8 z-20">
                    <Link
                        href="/news"
                        className="flex items-center gap-2 bg-white text-gray-900 shadow-lg px-6 py-3 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 font-bold uppercase text-xs tracking-widest group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to News
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Share & Actions */}
                    <div className="flex justify-between items-center py-6 border-b border-gray-100 mb-12">
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-black uppercase tracking-widest text-gray-400">Share This:</span>
                            <button
                                onClick={handleShare}
                                className="p-2.5 rounded-xl bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-all"
                                title="Share this article"
                            >
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-gray-900 border-b-2 border-primary/20">{post.category?.name || 'News'}</span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <motion.article
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-xl prose-primary max-w-none text-gray-800 leading-relaxed font-light mb-20"
                    >
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </motion.article>

                    {/* Author Bio (Placeholder) */}
                    <div className="bg-gray-50 rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 border border-gray-100 mb-20">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 shadow-xl border-4 border-white">
                            <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-4xl font-black">
                                {post.author?.username.charAt(0)}
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight">About the Author</h3>
                            <p className="text-xl font-bold text-primary mb-2">{post.author?.username || 'Tarazu Siddhant Team'}</p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Expert trader and educator at Tarazu Siddhant Academy. Specializing in Option Chain analysis, market psychology, and helping traders achieve consistent profitability through data-driven strategies.
                            </p>
                            <div className="flex justify-center md:justify-start gap-4">
                                <a
                                    href="/about"
                                    className="text-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all"
                                >
                                    About Us
                                </a>
                                <a
                                    href="https://youtube.com/@ltp1977?si=93R12yP1b4B1Q0Yy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all"
                                >
                                    Follow On YouTube
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Post Navigation */}
                    <div className="flex flex-col sm:flex-row justify-between gap-6 pt-12 border-t border-gray-100">
                        <Link
                            href="/news"
                            className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-primary hover:shadow-xl transition-all group flex-1"
                        >
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Previous Article</span>
                            <span className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">How to Read Market Breadth</span>
                        </Link>
                        <Link
                            href="/news"
                            className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-primary hover:shadow-xl transition-all group flex-1 text-right"
                        >
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Next Article</span>
                            <span className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">Swing Trading Mastery Guide</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
