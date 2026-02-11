'use client'

import { useState, useEffect } from 'react'
import {
    ArrowLeft,
    Mail,
    Phone,
    Calendar,
    CheckCircle,
    XCircle,
    Clock,
    Trash2,
    MessageSquare,
    User,
    ExternalLink
} from 'lucide-react'
import { format } from 'date-fns'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Lead {
    id: number
    name: string
    email: string
    phone: string | null
    message: string
    status: 'PENDING' | 'CONTACTED' | 'CONVERTED' | 'REJECTED'
    source: string | null
    createdAt: string
}

export default function AdminLeadDetailsPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [lead, setLead] = useState<Lead | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        fetchLead()
    }, [params.id])

    const fetchLead = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`/api/leads/${params.id}`)
            if (res.ok) {
                const data = await res.json()
                setLead(data)
            } else {
                router.push('/admin/leads')
            }
        } catch (error) {
            console.error('Error fetching lead:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const updateStatus = async (status: string) => {
        setIsUpdating(true)
        try {
            const res = await fetch(`/api/leads/${params.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            })
            if (res.ok) {
                const updatedLead = await res.json()
                setLead(updatedLead)
            }
        } catch (error) {
            console.error('Error updating status:', error)
        } finally {
            setIsUpdating(false)
        }
    }

    const deleteLead = async () => {
        if (!confirm('Are you sure you want to delete this lead?')) return
        try {
            const res = await fetch(`/api/leads/${params.id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                router.push('/admin/leads')
            }
        } catch (error) {
            console.error('Error deleting lead:', error)
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'PENDING': return 'bg-yellow-100 text-yellow-700'
            case 'CONTACTED': return 'bg-blue-100 text-blue-700'
            case 'CONVERTED': return 'bg-green-100 text-green-700'
            case 'REJECTED': return 'bg-red-100 text-red-700'
            default: return 'bg-gray-100 text-gray-700'
        }
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600 font-medium">Loading lead details...</p>
            </div>
        )
    }

    if (!lead) return null

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Link
                    href="/admin/leads"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Leads</span>
                </Link>
                <button
                    onClick={deleteLead}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-all font-medium border border-transparent hover:border-red-100"
                >
                    <Trash2 className="w-4 h-4" />
                    Delete Lead
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main content */}
                <div className="lg:col-span-2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <User className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{lead.name}</h1>
                                <p className="text-gray-500 font-medium">Lead ID: #{lead.id}</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                                    <MessageSquare className="w-5 h-5 text-primary" />
                                    Message
                                </h3>
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 leading-relaxed text-gray-700 italic">
                                    &quot;{lead.message}&quot;
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</p>
                                    <a
                                        href={`mailto:${lead.email}`}
                                        className="text-primary font-bold flex items-center gap-2 hover:underline decoration-2 underline-offset-4"
                                    >
                                        {lead.email}
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                                {lead.phone && (
                                    <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</p>
                                        <a
                                            href={`tel:${lead.phone}`}
                                            className="text-gray-900 font-bold flex items-center gap-2 hover:underline decoration-2 underline-offset-4"
                                        >
                                            {lead.phone}
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
                    >
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Status Info</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Current Status</p>
                                <span className={cn(
                                    "px-4 py-2 rounded-full text-xs font-bold uppercase inline-block",
                                    getStatusColor(lead.status)
                                )}>
                                    {lead.status}
                                </span>
                            </div>
                            <div className="border-t border-gray-100 pt-4">
                                <p className="text-sm text-gray-500 mb-3">Update Status</p>
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => updateStatus('PENDING')}
                                        disabled={isUpdating || lead.status === 'PENDING'}
                                        className="w-full text-left px-4 py-2 text-sm rounded-xl hover:bg-yellow-50 text-yellow-700 border border-yellow-100 transition-all disabled:opacity-50"
                                    >
                                        Mark as Pending
                                    </button>
                                    <button
                                        onClick={() => updateStatus('CONTACTED')}
                                        disabled={isUpdating || lead.status === 'CONTACTED'}
                                        className="w-full text-left px-4 py-2 text-sm rounded-xl hover:bg-blue-50 text-blue-700 border border-blue-100 transition-all disabled:opacity-50"
                                    >
                                        Mark as Contacted
                                    </button>
                                    <button
                                        onClick={() => updateStatus('CONVERTED')}
                                        disabled={isUpdating || lead.status === 'CONVERTED'}
                                        className="w-full text-left px-4 py-2 text-sm rounded-xl hover:bg-green-50 text-green-700 border border-green-100 transition-all disabled:opacity-50"
                                    >
                                        Mark as Converted
                                    </button>
                                    <button
                                        onClick={() => updateStatus('REJECTED')}
                                        disabled={isUpdating || lead.status === 'REJECTED'}
                                        className="w-full text-left px-4 py-2 text-sm rounded-xl hover:bg-red-50 text-red-700 border border-red-100 transition-all disabled:opacity-50"
                                    >
                                        Mark as Rejected
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
                    >
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Metadata</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">Submitted On</p>
                                    <p className="text-sm font-bold text-gray-900">{format(new Date(lead.createdAt), 'MMM dd, yyyy')}</p>
                                    <p className="text-xs text-gray-400">{format(new Date(lead.createdAt), 'hh:mm a')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">Source</p>
                                    <p className="text-sm font-bold text-gray-900">{lead.source || 'Website'}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
