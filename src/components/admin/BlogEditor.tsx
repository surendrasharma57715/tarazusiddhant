'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
    Save,
    X,
    Image as ImageIcon,
    Upload,
    Loader2,
    Settings,
    Layout,
    Globe,
    ArrowLeft
} from 'lucide-react'
import RichTextEditor from './RichTextEditor'
import { generateSlug, cn } from '@/lib/utils'
import { toast } from 'react-hot-toast' // I'll assume standard notification pattern or use alerts

interface Category {
    id: number
    name: string
}

interface BlogEditorProps {
    initialData?: any
    isEditing?: boolean
}

export default function BlogEditor({ initialData, isEditing = false }: BlogEditorProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState<Category[]>([])

    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        slug: initialData?.slug || '',
        content: initialData?.content || '',
        excerpt: initialData?.excerpt || '',
        featuredImage: initialData?.featuredImage || '',
        metaTitle: initialData?.metaTitle || '',
        metaDescription: initialData?.metaDescription || '',
        keywords: initialData?.keywords || '',
        categoryId: initialData?.categoryId || '',
        status: initialData?.status || 'DRAFT'
    })

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const res = await fetch('/api/admin/categories')
            if (res.ok) {
                const data = await res.json()
                setCategories(data)
            }
        } catch (error) {
            console.error('Error fetching categories:', error)
        }
    }

    const handleTitleChange = (title: string) => {
        setFormData(prev => ({
            ...prev,
            title,
            slug: isEditing ? prev.slug : generateSlug(title)
        }))
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const uploadData = new FormData()
        uploadData.append('file', file)

        setIsLoading(true)
        try {
            const res = await fetch('/api/admin/media/upload', {
                method: 'POST',
                body: uploadData
            })
            if (res.ok) {
                const data = await res.json()
                setFormData(prev => ({ ...prev, featuredImage: data.url }))
                alert('Image uploaded successfully!')
            } else {
                const err = await res.json()
                alert(err.error || 'Upload failed')
            }
        } catch (error) {
            console.error('Error uploading image:', error)
            alert('An error occurred during upload')
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const url = isEditing
                ? `/api/admin/blog/${initialData.id}`
                : '/api/admin/blog'

            const res = await fetch(url, {
                method: isEditing ? 'PATCH' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    categoryId: formData.categoryId ? parseInt(formData.categoryId.toString()) : null
                })
            })

            if (res.ok) {
                alert(isEditing ? 'Post updated!' : 'Post created!')
                router.push('/admin/blog')
                router.refresh()
            } else {
                const err = await res.json()
                alert(err.error || 'Failed to save post')
            }
        } catch (error) {
            console.error('Error saving post:', error)
            alert('An error occurred while saving')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto pb-20">
            {/* Action Bar */}
            <div className="sticky top-0 z-20 bg-gray-50/80 backdrop-blur-md py-4 mb-8 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="p-2 hover:bg-white rounded-xl transition-all border border-transparent hover:border-gray-200"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {isEditing ? 'Edit Post' : 'Create New Post'}
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <select
                        value={formData.status}
                        onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-bold uppercase transition-all"
                    >
                        <option value="DRAFT">Draft</option>
                        <option value="PUBLISHED">Published</option>
                    </select>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-bold shadow-md active:scale-95 disabled:opacity-50"
                    >
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        {isEditing ? 'Update Post' : 'Save Post'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Title & Basic Info */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Post Title</label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => handleTitleChange(e.target.value)}
                                placeholder="Enter a catchy title..."
                                className="w-full text-3xl font-bold border-none focus:ring-0 placeholder:text-gray-200 p-0"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">URL Slug</label>
                            <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-50 p-3 rounded-xl border border-gray-100 font-mono">
                                <span>/blog/</span>
                                <input
                                    type="text"
                                    required
                                    value={formData.slug}
                                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                                    className="bg-transparent border-none p-0 focus:ring-0 text-gray-900 flex-1"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Content</label>
                            <RichTextEditor
                                content={formData.content}
                                onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                            />
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-4">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1 flex items-center gap-2">
                            <Layout className="w-4 h-4" /> Short Excerpt
                        </label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                            rows={3}
                            placeholder="A brief summary for cards and search results..."
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-700"
                        />
                    </div>
                </div>

                {/* Sidebar - Meta & Settings */}
                <div className="space-y-8">
                    {/* Category & Image */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <Settings className="w-4 h-4" /> Classification
                            </h3>
                            <select
                                value={formData.categoryId}
                                onChange={(e) => setFormData(prev => ({ ...prev, categoryId: e.target.value }))}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                            >
                                <option value="">Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <ImageIcon className="w-4 h-4" /> Featured Image
                            </h3>
                            <div className="relative aspect-video bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 overflow-hidden group">
                                {formData.featuredImage ? (
                                    <>
                                        <img
                                            src={formData.featuredImage}
                                            alt="Featured"
                                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <label className="cursor-pointer bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl active:scale-95 transition-all">
                                                Change Image
                                                <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                                            </label>
                                        </div>
                                    </>
                                ) : (
                                    <label className="absolute inset-0 cursor-pointer flex flex-col items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/5 transition-all">
                                        <Upload className="w-8 h-8 mb-2" />
                                        <span className="text-sm font-bold uppercase tracking-wider">Upload Cover</span>
                                        <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                                    </label>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* SEO Settings */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-6">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 font-poppins">
                            <Globe className="w-4 h-4" /> SEO Settings
                        </h3>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest opacity-60">Meta Title</label>
                            <input
                                type="text"
                                value={formData.metaTitle}
                                onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest opacity-60">Meta Description</label>
                            <textarea
                                value={formData.metaDescription}
                                onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                                rows={4}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest opacity-60">Keywords</label>
                            <input
                                type="text"
                                value={formData.keywords}
                                onChange={(e) => setFormData(prev => ({ ...prev, keywords: e.target.value }))}
                                placeholder="trading, options, chain analysis..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
