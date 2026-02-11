'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
    LayoutDashboard,
    Users,
    FileText,
    FolderOpen,
    Image,
    Settings,
    Menu,
    X,
    ChevronLeft,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Users, label: 'Leads', href: '/admin/leads' },
    { icon: FileText, label: 'Blog Posts', href: '/admin/blog' },
    { icon: FolderOpen, label: 'Categories', href: '/admin/categories' },
    { icon: Image, label: 'Media', href: '/admin/media' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
]

export default function AdminSidebar() {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-lg shadow-lg"
            >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{
                    width: isCollapsed ? '80px' : '280px',
                    x: isMobileOpen ? 0 : '-100%',
                }}
                className={cn(
                    'fixed lg:sticky top-0 left-0 h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-r border-gray-700 z-40 transition-all duration-300',
                    'lg:translate-x-0'
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-700">
                        <Link href="/admin/dashboard" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <LayoutDashboard className="w-6 h-6 text-white" />
                            </div>
                            {!isCollapsed && (
                                <div className="overflow-hidden">
                                    <h1 className="text-white font-bold text-lg whitespace-nowrap">Admin Panel</h1>
                                    <p className="text-gray-400 text-xs whitespace-nowrap">Tarazu Siddhant</p>
                                </div>
                            )}
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 overflow-y-auto">
                        <ul className="space-y-2">
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                                const Icon = item.icon

                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className={cn(
                                                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative',
                                                isActive
                                                    ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg'
                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                            )}
                                        >
                                            <Icon className="w-5 h-5 flex-shrink-0" />
                                            {!isCollapsed && (
                                                <span className="font-medium whitespace-nowrap">{item.label}</span>
                                            )}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl -z-10"
                                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    {/* Collapse button (desktop only) */}
                    <div className="hidden lg:block p-4 border-t border-gray-700">
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-all"
                        >
                            <ChevronLeft
                                className={cn(
                                    'w-5 h-5 transition-transform',
                                    isCollapsed && 'rotate-180'
                                )}
                            />
                            {!isCollapsed && <span className="text-sm">Collapse</span>}
                        </button>
                    </div>
                </div>
            </motion.aside>
        </>
    )
}
