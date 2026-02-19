'use client'

import { useState, useEffect } from 'react'
import {
    Users,
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Eye,
    Trash2,
    CheckCircle,
    XCircle,
    Clock,
    Download
} from 'lucide-react'
import { format } from 'date-fns'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('ALL')
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [isExporting, setIsExporting] = useState(false)
    const [openMenuId, setOpenMenuId] = useState<number | null>(null)

    useEffect(() => {
        fetchLeads()
    }, [page, statusFilter])

    const fetchLeads = async () => {
        setIsLoading(true)
        try {
            const query = new URLSearchParams({
                page: page.toString(),
                limit: '10',
                status: statusFilter,
                q: search
            })
            const res = await fetch(`/api/leads?${query}`)
            const data = await res.json()
            if (data.leads) {
                setLeads(data.leads)
                setTotalPages(data.pagination.totalPages)
            }
        } catch (error) {
            console.error('Error fetching leads:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setPage(1)
        fetchLeads()
    }

    const updateLeadStatus = async (id: number, status: string) => {
        try {
            const res = await fetch(`/api/leads/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            })
            if (res.ok) {
                fetchLeads()
                setOpenMenuId(null)
            }
        } catch (error) {
            console.error('Error updating status:', error)
        }
    }

    const deleteLead = async (id: number) => {
        if (!confirm('Are you sure you want to delete this lead?')) return
        try {
            const res = await fetch(`/api/leads/${id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                fetchLeads()
                setOpenMenuId(null)
            }
        } catch (error) {
            console.error('Error deleting lead:', error)
        }
    }

    const exportLeads = async () => {
        setIsExporting(true)
        try {
            const res = await fetch('/api/admin/leads/export')
            const blob = await res.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `leads_export_${format(new Date(), 'yyyy-MM-dd')}.csv`
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error('Error exporting leads:', error)
        } finally {
            setIsExporting(false)
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

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Leads Management</h1>
                    <p className="text-gray-600">Track and manage your academy inquiries</p>
                </div>
                <button
                    onClick={exportLeads}
                    disabled={isExporting}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all font-medium text-gray-700 shadow-sm"
                >
                    <Download className="w-4 h-4" />
                    {isExporting ? 'Exporting...' : 'Export CSV'}
                </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex flex-col lg:flex-row gap-4">
                    <form onSubmit={handleSearch} className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by name, email or phone..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </form>
                    <div className="flex gap-2">
                        <select
                            value={statusFilter}
                            onChange={(e) => {
                                setStatusFilter(e.target.value)
                                setPage(1)
                            }}
                            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-700 min-w-[160px]"
                        >
                            <option value="ALL">All Status</option>
                            <option value="PENDING">Pending</option>
                            <option value="CONTACTED">Contacted</option>
                            <option value="CONVERTED">Converted</option>
                            <option value="REJECTED">Rejected</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Lead Info</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Message</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-700">
                            {isLoading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div><div className="h-3 bg-gray-100 rounded w-1/2"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-full"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 bg-gray-200 rounded-full w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-8 bg-gray-200 rounded w-8 ml-auto"></div></td>
                                    </tr>
                                ))
                            ) : leads.length > 0 ? (
                                leads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-gray-900">{lead.name}</div>
                                            <div className="flex flex-col text-sm text-gray-500 gap-1 mt-1">
                                                <div className="flex items-center gap-2"><Mail className="w-3 h-3" /> {lead.email}</div>
                                                {lead.phone && <div className="flex items-center gap-2"><Phone className="w-3 h-3" /> {lead.phone}</div>}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 max-w-xs xl:max-w-md">
                                            <p className="text-sm line-clamp-2">{lead.message}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-xs font-bold uppercase",
                                                getStatusColor(lead.status)
                                            )}>
                                                {lead.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Calendar className="w-3 h-3" />
                                                {format(new Date(lead.createdAt), 'MMM dd, yyyy')}
                                            </div>
                                            <div className="text-xs text-gray-400 mt-1">{format(new Date(lead.createdAt), 'hh:mm a')}</div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/leads/${lead.id}`}
                                                    className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                                                    title="View Details"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                </Link>
                                                <div className="relative">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            setOpenMenuId(openMenuId === lead.id ? null : lead.id)
                                                        }}
                                                        className={cn(
                                                            "p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all",
                                                            openMenuId === lead.id && "bg-gray-100 text-gray-900"
                                                        )}
                                                    >
                                                        <MoreVertical className="w-5 h-5" />
                                                    </button>

                                                    {openMenuId === lead.id && (
                                                        <>
                                                            <div
                                                                className="fixed inset-0 z-10"
                                                                onClick={() => setOpenMenuId(null)}
                                                            />
                                                            <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                                                                <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase">Set Status</div>
                                                                <button onClick={() => updateLeadStatus(lead.id, 'PENDING')} className="w-full text-left px-4 py-2 text-sm hover:bg-yellow-50 text-yellow-700 transition-colors">Pending</button>
                                                                <button onClick={() => updateLeadStatus(lead.id, 'CONTACTED')} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 text-blue-700 transition-colors">Contacted</button>
                                                                <button onClick={() => updateLeadStatus(lead.id, 'CONVERTED')} className="w-full text-left px-4 py-2 text-sm hover:bg-green-50 text-green-700 transition-colors">Converted</button>
                                                                <button onClick={() => updateLeadStatus(lead.id, 'REJECTED')} className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-700 transition-colors">Rejected</button>
                                                                <div className="border-t border-gray-100 my-1"></div>
                                                                <button onClick={() => deleteLead(lead.id)} className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-600 flex items-center gap-2 transition-colors">
                                                                    <Trash2 className="w-4 h-4" /> Delete Lead
                                                                </button>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        <Users className="w-12 h-12 mx-auto mb-4 text-gray-200" />
                                        <p className="text-lg font-medium">No leads found</p>
                                        <p className="text-sm">Try adjusting your search or filters</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                            Page <span className="font-bold">{page}</span> of <span className="font-bold">{totalPages}</span>
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="p-2 border border-gray-300 rounded-lg hover:bg-white disabled:opacity-50 transition-all"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className="p-2 border border-gray-300 rounded-lg hover:bg-white disabled:opacity-50 transition-all"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
