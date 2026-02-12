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
            navigator.clipboard.writeText(window.location.href)
            alert('Link copied to clipboard!')
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Clean Navigation Bar */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-semibold transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to All News</span>
                    </Link>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
                {/* Article Header */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                    {/* Featured Image */}
                    <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
                        <img
                            src={post.featuredImage || '/blog_placeholder.png'}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-10 lg:p-12">
                        {/* Category Badge */}
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-lg mb-4">
                            {post.category?.name || 'News'}
                        </span>

                        {/* Title */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 mb-6 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>
                                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-primary" />
                                <span>{post.author?.username}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span>8 min read</span>
                            </div>
                        </div>

                        {/* Share Section */}
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-semibold text-gray-700">Share this article:</span>
                                <button
                                    onClick={handleShare}
                                    className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all"
                                    title="Share this article"
                                >
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-gray-900">{post.category?.name || 'News'}</span>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none mb-12">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>

                        {/* Author Bio */}
                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-gray-100">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-black flex-shrink-0 shadow-lg">
                                {post.author?.username.charAt(0)}
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-xl font-black text-gray-900 mb-2">About the Author</h3>
                                <p className="text-lg font-bold text-primary mb-2">{post.author?.username || 'Tarazu Siddhant Team'}</p>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    Expert trader and educator at Tarazu Siddhant Academy. Specializing in Option Chain analysis, market psychology, and helping traders achieve consistent profitability through data-driven strategies.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <a
                                        href="/about"
                                        className="text-primary font-bold text-sm hover:underline"
                                    >
                                        About Us
                                    </a>
                                    <a
                                        href="https://youtube.com/@ltp1977?si=93R12yP1b4B1Q0Yy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary font-bold text-sm hover:underline"
                                    >
                                        Follow On YouTube
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.article>

                {/* Navigation to Other Posts */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                        href="/news"
                        className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-primary hover:shadow-lg transition-all group"
                    >
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Previous Article</span>
                        <span className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">How to Read Market Breadth</span>
                    </Link>
                    <Link
                        href="/news"
                        className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-primary hover:shadow-lg transition-all group text-right"
                    >
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Next Article</span>
                        <span className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">Swing Trading Mastery Guide</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
