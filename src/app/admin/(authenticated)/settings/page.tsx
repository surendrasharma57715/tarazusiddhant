'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { User, Mail, Shield, Settings as SettingsIcon, Bell, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const SettingsPage = () => {
    const { data: session } = useSession()

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
                                    <p className="text-sm text-gray-600">{section.description}</p>
                                    <button className="px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-lg hover:bg-gray-800 transition-colors">
                                        {section.action}
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default SettingsPage
