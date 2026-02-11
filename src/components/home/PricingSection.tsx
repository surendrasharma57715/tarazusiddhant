'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Shield, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const PricingSection = () => {
    const plans = [
        {
            name: 'Silver Membership',
            price: '₹7,299',
            period: '/3 Months',
            description: 'Perfect for beginners starting their trading journey.',
            features: [
                'Basic Live Classes Access',
                'Fundamental Courses',
                'Introduction to Taraju Principle',
                'Community Support',
                'Basic Trading Strategies'
            ],
            cta: 'Join Silver Plan',
            popular: false,
            icon: Shield,
            color: 'from-gray-400 to-gray-600'
        },
        {
            name: 'Gold Membership',
            price: '₹11,999',
            period: '/6 Months',
            description: 'The most popular choice for serious traders.',
            features: [
                'All Live Classes Access',
                'All Courses Access',
                'Advanced Taraju Principle',
                'Intraday Special Strategies',
                'Option Chain Analysis'
            ],
            cta: 'Join Gold Plan',
            popular: true,
            icon: Zap,
            color: 'from-amber-400 to-amber-600'
        },
        {
            name: 'Diamond Membership',
            price: '₹41,555',
            period: '/6 Months',
            description: 'The ultimate mentorship for elite level trading.',
            features: [
                'Everything in Gold',
                'Live & Recorded Classes',
                'One-on-One Personal Class',
                '45-Min Weekly Session',
                'VIP Mentorship Circle'
            ],
            cta: 'Join Diamond Plan',
            popular: false,
            icon: Star,
            color: 'from-primary to-purple-600'
        }
    ]

    return (
        <section className="py-24 bg-gray-50/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4 border border-primary/20">
                            Membership Plans
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 leading-tight">
                            Choose Your Path to <span className="text-primary">Financial Freedom</span>
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Tailored membership programs designed to take you from a novice to a professional trader using the Tarazu Siddhant methodology.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${plan.popular ? 'border-primary' : 'border-transparent'}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                                <plan.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-black text-text-primary">{plan.price}</span>
                                <span className="text-text-secondary font-medium">{plan.period}</span>
                            </div>
                            <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                                {plan.description}
                            </p>

                            <div className="space-y-4 mb-10">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-green-600" />
                                        </div>
                                        <span className="text-sm text-text-primary font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="https://academy.tarajusiddhant.com/memberships"
                                target="_blank"
                                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${plan.popular
                                    ? 'bg-primary text-white hover:bg-primary-700 shadow-lg shadow-primary/20'
                                    : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                                    }`}
                            >
                                {plan.cta} <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-text-secondary text-sm">
                        All plans include 24/7 community support and access to our basic tools.
                        <br className="hidden sm:block" /> Needs a custom plan for your group? <Link href="/contact" className="text-primary font-bold hover:underline">Contact Us</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
