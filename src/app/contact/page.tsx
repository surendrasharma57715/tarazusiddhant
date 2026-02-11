'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react'

// Contact Information Data
const contactInfo = [
    {
        icon: MapPin,
        title: 'Our Location',
        details: ['Tarazu Siddhant Academy', 'Kalwar Road, Jaipur', 'Rajasthan, India'],
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: Phone,
        title: 'Phone Number',
        details: ['+91 82092 03234', '+91 12345 67890'],
        color: 'bg-green-100 text-green-600'
    },
    {
        icon: Mail,
        title: 'Email Address',
        details: ['support@tarajusiddhant.com', 'info@tarazusiddhant.com'],
        color: 'bg-purple-100 text-purple-600'
    },
    {
        icon: Clock,
        title: 'Working Hours',
        details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
        color: 'bg-orange-100 text-orange-600'
    }
]

// Social Links
const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
]

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                alert('Message sent successfully!')
                reset()
            } else {
                const result = await response.json()
                alert(`Error: ${result.error || 'Failed to send message'}`)
            }
        } catch (error) {
            console.error('Submission error:', error)
            alert('Something went wrong. Please try again later.')
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            {/* Header Section */}
            <div className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light"
                    >
                        Have questions about our courses or trading strategies? We&apos;re here to help you start your journey.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                Contact Information
                                <div className="h-1 w-20 bg-primary rounded-full mt-1"></div>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Feel free to reach out to us through any of the following contact details. Our support team is always ready to assist you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                                >
                                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 text-xl`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                                    {item.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                                    ))}
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-500 hover:shadow-md hover:scale-110 transition-all duration-300 ${social.color}`}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                        <p className="text-gray-500 mb-8">We usually reply within 24 hours.</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                    <input
                                        {...register('name', {
                                            required: 'Name is required',
                                            minLength: { value: 2, message: 'Name must be at least 2 characters' }
                                        })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message as string}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                                    <input
                                        {...register('phone', { required: 'Phone is required' })}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message as string}</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                                    })}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea
                                    {...register('message', {
                                        required: 'Message is required',
                                        minLength: { value: 10, message: 'Message must be at least 10 characters' }
                                    })}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none"
                                    placeholder="How can we help you?"
                                />
                                {errors.message && <span className="text-red-500 text-xs">{errors.message.message as string}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-700 hover:shadow-lg transform active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 lg:mt-32"
                >
                    <div className="bg-white p-2 rounded-3xl shadow-lg border border-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.485121404!2d75.7225123!3d26.9405234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3766666666b%3A0x6666666666666666!2sKalwar%20Road%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1706698654321!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '1.5rem', filter: 'grayscale(0.2) contrast(1.1)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
