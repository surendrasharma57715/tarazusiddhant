'use client'

import { useState, useEffect } from 'react'
import {
    Tag,
    Plus,
    Edit,
    Trash2,
    Loader2,
    X,
    Save,
    FileText,
    Settings,
    Layout
} from 'lucide-react'
import { generateSlug, cn } from '@/lib/utils'

interface Category {
    id: number
    name: string
    slug: string
    description: string | null
    _count?: {
        blogPosts: number
    }
}

export default function AdminCategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isSaving, setIsSaving] = useState(false)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [isAdding, setIsAdding] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        description: ''
    })

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        setIsLoading(true)
        try {
            const res = await fetch('/api/admin/categories')
            if (res.ok) {
                const data = await res.json()
                setCategories(data)
            }
        } catch (error) {
            console.error('Error fetching categories:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)

        try {
            const url = editingId
                ? `/api/admin/categories/${editingId}`
                : '/api/admin/categories'

            const res = await fetch(url, {
                method: editingId ? 'PATCH' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                fetchCategories()
                resetForm()
            } else {
                const err = await res.json()
                alert(err.error || 'Failed to save category')
            }
        } catch (error) {
            console.error('Error saving category:', error)
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure? This cannot be undone.')) return
        try {
            const res = await fetch(`/api/admin/categories/${id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                fetchCategories()
            } else {
                const err = await res.json()
                alert(err.error || 'Failed to delete')
            }
        } catch (error) {
            console.error('Error deleting category:', error)
        }
    }

    const startEdit = (cat: Category) => {
        setEditingId(cat.id)
        setFormData({
            name: cat.name,
            slug: cat.slug,
            description: cat.description || ''
        })
        setIsAdding(true)
    }

    const resetForm = () => {
        setEditingId(null)
        setIsAdding(false)
        setFormData({ name: '', slug: '', description: '' })
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
                    <p className="text-gray-600">Organize your blog posts into topics</p>
                </div>
                {!isAdding && (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:shadow-lg transition-all font-bold shadow-md active:scale-95"
                    >
                        <Plus className="w-5 h-5" />
                        New Category
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Editor Overlay/Section */}
                {isAdding && (
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 sticky top-4">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold text-gray-900">
                                    {editingId ? 'Edit Category' : 'New Category'}
                                </h2>
                                <button onClick={resetForm} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form onSubmit={handleSave} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => {
                                            setFormData(prev => ({
                                                ...prev,
                                                name: e.target.value,
                                                slug: editingId ? prev.slug : generateSlug(e.target.value)
                                            }))
                                        }}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-bold text-gray-900"
                                        placeholder="Category Name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Slug</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.slug}
                                        onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-mono text-sm"
                                        placeholder="url-slug"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Description</label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                        rows={4}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 transition-all text-sm text-gray-600"
                                        placeholder="Optional description..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl hover:shadow-lg transition-all font-bold shadow-md active:scale-95 disabled:opacity-50"
                                >
                                    {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                                    {editingId ? 'Update Category' : 'Create Category'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* List Section */}
                <div className={cn("space-y-4", isAdding ? "lg:col-span-2" : "lg:col-span-3")}>
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="h-24 bg-white rounded-3xl border border-gray-100 animate-pulse" />
                        ))
                    ) : categories.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {categories.map((cat) => (
                                <div key={cat.id} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:border-primary/20 transition-all group overflow-hidden relative">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                                <Tag className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg leading-tight">{cat.name}</h3>
                                                <p className="text-xs font-mono text-gray-400 mt-1">/{cat.slug}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => startEdit(cat)} className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all">
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button onClick={() => handleDelete(cat.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full">
                                            <FileText className="w-3 h-3 text-gray-400" />
                                            <span className="text-xs font-bold text-gray-500">{cat._count?.blogPosts || 0} Posts</span>
                                        </div>
                                        <p className="text-xs text-gray-400 italic line-clamp-1 max-w-[150px]">
                                            {cat.description || 'No description'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-100">
                            <Tag className="w-16 h-16 mx-auto mb-4 text-gray-100" />
                            <h3 className="text-xl font-bold text-gray-900">No Categories Found</h3>
                            <p className="text-gray-500 mb-8 max-w-xs mx-auto">Create categories to organize your educational content and trading signals.</p>
                            <button
                                onClick={() => setIsAdding(true)}
                                className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-xl hover:shadow-primary/20 transition-all"
                            >
                                Get Started
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
