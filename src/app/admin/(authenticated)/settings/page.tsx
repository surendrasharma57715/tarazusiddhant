'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { User, Mail, Shield, Settings as SettingsIcon, Bell, Lock, Loader2, CheckCircle2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const SettingsPage = () => {
    const { data: session } = useSession()
    const [isPasswordModalOpen, setIsPasswordModalOpen] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [passwordData, setPasswordData] = React.useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [error, setError] = React.useState<string | null>(null)
    const [success, setSuccess] = React.useState<string | null>(null)

    const [notifs, setNotifs] = React.useState({
        emailLeads: true,
        browserAlerts: false,
        weeklyReports: true
    })

    const handlePasswordUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setSuccess(null)
        setIsLoading(true)

        try {
            const res = await fetch('/api/admin/settings/password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(passwordData)
            })

            const data = await res.json()
            if (res.ok) {
                setSuccess('Password updated successfully!')
                setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
                setTimeout(() => setIsPasswordModalOpen(false), 2000)
            } else {
                setError(data.error || 'Failed to update password')
            }
        } catch (err) {
            setError('An unexpected error occurred')
        } finally {
            setIsLoading(false)
        }
    }

    const sections = [
        {
            title: 'Account Information',
            icon: User,
            items: [
                { label: 'Name', value: session?.user?.name || 'Admin' },
                { label: 'Email', value: session?.user?.email || 'surendrasharmaltp@gmail.com' },
                { label: 'Role', value: session?.user?.role || 'Administrator' },
            ]
        },
        {
            title: 'Security',
            icon: Lock,
            description: 'Manage your password and security settings.',
            action: 'Update Password'
        },
        {
            title: 'Notifications',
            icon: Bell,
            description: 'Configure how you receive alerts and updates.',
            action: 'Manage Notifications'
        }
    ]

    return (
        <div className="max-w-4xl">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <SettingsIcon className="w-8 h-8 text-primary" />
                    Admin Settings
                </h1>
                <p className="text-gray-600 mt-2">Manage your account preferences and security.</p>
            </header>

            <div className="space-y-6">
                {sections.map((section, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <section.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                            </div>

                            {section.items ? (
                                <div className="space-y-4">
                                    {section.items.map((item, iIdx) => (
                                        <div key={iIdx} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-gray-50 last:border-0">
                                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{item.label}</span>
                                            <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600">{section.description}</p>
                                        {section.title === 'Notifications' && (
                                            <div className="mt-4 space-y-3">
                                                {Object.entries(notifs).map(([key, value]) => (
                                                    <label key={key} className="flex items-center gap-3 cursor-pointer group">
                                                        <div
                                                            onClick={() => setNotifs(prev => ({ ...prev, [key]: !value }))}
                                                            className={cn(
                                                                "w-10 h-5 rounded-full transition-all relative border",
                                                                value ? "bg-primary border-primary" : "bg-gray-100 border-gray-200"
                                                            )}
                                                        >
                                                            <div className={cn(
                                                                "absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all shadow-sm",
                                                                value ? "left-5.5" : "left-0.5"
                                                            )} />
                                                        </div>
                                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600 transition-colors">
                                                            {key.replace(/([A-Z])/g, ' $1')}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (section.title === 'Security') setIsPasswordModalOpen(true)
                                            else if (section.title === 'Notifications') {
                                                alert('Notification preferences saved locally (Simulated)')
                                            }
                                        }}
                                        className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-black transition-all shadow-lg active:scale-95"
                                    >
                                        {section.action}
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Password Update Modal */}
            <AnimatePresence>
                {isPasswordModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsPasswordModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900">Update Password</h3>
                                    <button
                                        onClick={() => setIsPasswordModalOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-xl transition-all"
                                    >
                                        <X className="w-5 h-5 text-gray-400" />
                                    </button>
                                </div>

                                <form onSubmit={handlePasswordUpdate} className="space-y-6">
                                    {error && (
                                        <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-medium border border-red-100 animate-shake">
                                            {error}
                                        </div>
                                    )}
                                    {success && (
                                        <div className="p-4 bg-green-50 text-green-600 rounded-2xl text-sm font-medium border border-green-100 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" /> {success}
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Current Password</label>
                                        <input
                                            type="password"
                                            required
                                            value={passwordData.currentPassword}
                                            onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">New Password</label>
                                        <input
                                            type="password"
                                            required
                                            value={passwordData.newPassword}
                                            onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Confirm New Password</label>
                                        <input
                                            type="password"
                                            required
                                            value={passwordData.confirmPassword}
                                            onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Update Password'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default SettingsPage
