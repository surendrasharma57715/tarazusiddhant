'use client'

import { useState, useEffect } from 'react'
import BlogEditor from '@/components/admin/BlogEditor'
import { useRouter } from 'next/navigation'

export default function EditPostPage({ params }: { params: { id: string } }) {
    const [post, setPost] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        fetchPost()
    }, [params.id])

    const fetchPost = async () => {
        try {
            const res = await fetch(`/api/admin/blog/${params.id}`)
            if (res.ok) {
                const data = await res.json()
                setPost(data)
            } else {
                router.push('/admin/blog')
            }
        } catch (error) {
            console.error('Error fetching post:', error)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600 font-medium">Loading post editor...</p>
            </div>
        )
    }

    if (!post) return null

    return (
        <div className="space-y-6">
            <BlogEditor initialData={post} isEditing={true} />
        </div>
    )
}
