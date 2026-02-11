'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Calendar, User, ArrowRight, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Blog Categories
const categories = ['All', 'Market Analysis', 'Trading Strategies', 'Risk Management', 'Option Chain Mastery']

export default function NewsPage() {
    const [posts, setPosts] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        fetchPosts()
    }, [selectedCategory])

    const fetchPosts = async () => {
        setIsLoading(true)
        try {
            const query = new URLSearchParams({
                category: selectedCategory,
                q: searchQuery
            })
            const res = await fetch(`/api/blog?${query}`)
            const data = await res.json()
            if (Array.isArray(data)) {
                setPosts(data)
            }
        } catch (error) {
            console.error('Error fetching blogs:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        fetchPosts()
    }

    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="bg-primary py-20 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20"
                    >
                        Academy Updates
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 uppercase"
                    >
                        What&apos;s <span className="text-secondary-400">New</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Stay updated with the latest trading insights, academy news, and expert market analysis from Tarazu Siddhant Academy.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4">
                {/* Search and Filter */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
                    {/* Categories UI */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30 transform scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="relative w-full lg:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300"
                        />
                    </form>
                </div>

                {/* Blog Grid */}
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Loading Articles...</p>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        <AnimatePresence mode='popLayout'>
                            {posts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative h-60 overflow-hidden">
                                        <img
                                            src={post.featuredImage || '/blog_placeholder.png'}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-lg">
                                                {post.category?.name || 'News'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-gray-500 text-xs mb-4 font-semibold uppercase tracking-widest">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-primary" />
                                                {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                            <span className="flex items-center gap-1.5">
                                                <User className="w-3.5 h-3.5 text-primary" />
                                                {post.author?.username}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="pt-6 border-t border-gray-100 mt-auto">
                                            <Link
                                                href={`/news/${post.slug}`}
                                                className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group/btn"
                                            >
                                                Read Full Article
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {!isLoading && posts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="bg-gray-50 inline-flex p-8 rounded-full mb-6">
                            <Search className="w-12 h-12 text-gray-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
                        <p className="text-gray-500">We couldn&apos;t find any articles matching your search or category.</p>
                        <button
                            onClick={() => { setSelectedCategory('All'); setSearchQuery('') }}
                            className="mt-6 text-primary font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

