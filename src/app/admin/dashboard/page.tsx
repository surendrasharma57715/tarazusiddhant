import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { Users, FileText, FolderOpen, Image, TrendingUp, Clock } from 'lucide-react'
import { formatRelativeTime } from '@/lib/utils'
import Link from 'next/link'

async function getDashboardStats() {
    const [totalLeads, totalPosts, totalCategories, totalMedia, recentLeads, recentPosts] = await Promise.all([
        prisma.lead.count(),
        prisma.blogPost.count({ where: { deletedAt: null } }),
        prisma.category.count(),
        prisma.media.count(),
        prisma.lead.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
        }),
        prisma.blogPost.findMany({
            take: 5,
            where: { deletedAt: null },
            orderBy: { createdAt: 'desc' },
            include: { category: true },
        }),
    ])

    return {
        totalLeads,
        totalPosts,
        totalCategories,
        totalMedia,
        recentLeads,
        recentPosts,
    }
}

export default async function AdminDashboardPage() {
    const session = await getServerSession(authOptions)
    const stats = await getDashboardStats()

    const statCards = [
        {
            title: 'Total Leads',
            value: stats.totalLeads,
            icon: Users,
            color: 'from-blue-500 to-blue-600',
            href: '/admin/leads',
        },
        {
            title: 'Blog Posts',
            value: stats.totalPosts,
            icon: FileText,
            color: 'from-purple-500 to-purple-600',
            href: '/admin/blog',
        },
        {
            title: 'Categories',
            value: stats.totalCategories,
            icon: FolderOpen,
            color: 'from-green-500 to-green-600',
            href: '/admin/categories',
        },
        {
            title: 'Media Files',
            value: stats.totalMedia,
            icon: Image,
            color: 'from-orange-500 to-orange-600',
            href: '/admin/media',
        },
    ]

    return (
        <div className="space-y-6">
            {/* Welcome message */}
            <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                <h1 className="text-3xl font-bold mb-2">Welcome back, {session?.user?.name}! 👋</h1>
                <p className="text-white/90">Here&apos;s what&apos;s happening with your trading academy today.</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Link
                            key={stat.title}
                            href={stat.href}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <TrendingUp className="w-5 h-5 text-green-500" />
                            </div>
                            <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        </Link>
                    )
                })}
            </div>

            {/* Recent activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent leads */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">Recent Leads</h2>
                            <Link
                                href="/admin/leads"
                                className="text-sm text-primary hover:text-primary-700 font-medium"
                            >
                                View all →
                            </Link>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {stats.recentLeads.length > 0 ? (
                            stats.recentLeads.map((lead) => (
                                <Link
                                    key={lead.id}
                                    href={`/admin/leads/${lead.id}`}
                                    className="p-4 hover:bg-gray-50 transition-colors block"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900">{lead.name}</p>
                                            <p className="text-sm text-gray-600">{lead.email}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${lead.status === 'PENDING'
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : lead.status === 'CONTACTED'
                                                        ? 'bg-blue-100 text-blue-700'
                                                        : 'bg-green-100 text-green-700'
                                                    }`}
                                            >
                                                {lead.status}
                                            </span>
                                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {formatRelativeTime(lead.createdAt)}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="p-8 text-center text-gray-500">
                                <Users className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                                <p>No leads yet</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Recent blog posts */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">Recent Posts</h2>
                            <Link
                                href="/admin/blog"
                                className="text-sm text-primary hover:text-primary-700 font-medium"
                            >
                                View all →
                            </Link>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {stats.recentPosts.length > 0 ? (
                            stats.recentPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/admin/blog/edit/${post.id}`}
                                    className="p-4 hover:bg-gray-50 transition-colors block"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900 line-clamp-1">{post.title}</p>
                                            <p className="text-sm text-gray-600">{post.category?.name || 'Uncategorized'}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${post.status === 'PUBLISHED'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-gray-100 text-gray-700'
                                                    }`}
                                            >
                                                {post.status}
                                            </span>
                                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {formatRelativeTime(post.createdAt)}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="p-8 text-center text-gray-500">
                                <FileText className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                                <p>No posts yet</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Quick actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                        href="/admin/blog/new"
                        className="p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-center group"
                    >
                        <FileText className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-primary" />
                        <p className="font-medium text-gray-700 group-hover:text-primary">Create New Post</p>
                    </Link>
                    <Link
                        href="/admin/categories"
                        className="p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-center group"
                    >
                        <FolderOpen className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-primary" />
                        <p className="font-medium text-gray-700 group-hover:text-primary">Manage Categories</p>
                    </Link>
                    <Link
                        href="/admin/media"
                        className="p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-center group"
                    >
                        <Image className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-primary" />
                        <p className="font-medium text-gray-700 group-hover:text-primary">Upload Media</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
