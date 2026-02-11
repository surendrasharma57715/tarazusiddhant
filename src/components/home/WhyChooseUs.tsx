'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Clock, Users, Award, Zap, ShieldCheck } from 'lucide-react'

const WhyChooseUs = () => {
    const reasons = [
        {
            title: 'Expert Mentorship',
            description: 'Direct guidance from Surendra Kumar Sharma with years of live market experience.',
            icon: Users,
            color: 'bg-blue-500/10 text-blue-600'
        },
        {
            title: '95% Success Rate',
            description: 'Proven strategies based on the Tarazu Principle with a high historical accuracy.',
            icon: Target,
            color: 'bg-primary/10 text-primary'
        },
        {
            title: 'Live Market Rules',
            description: 'Practical learning in real-time market conditions, not just backtested data.',
            icon: Zap,
            color: 'bg-yellow-500/10 text-yellow-600'
        },
        {
            title: 'Option Chain Mastery',
            description: 'Deep dive into Option Greeks and data analysis for high-probability setups.',
            icon: Award,
            color: 'bg-purple-500/10 text-purple-600'
        },
        {
            title: 'Lifetime Support',
            description: 'Join a vibrant community of traders and get continuous post-course guidance.',
            icon: Clock,
            color: 'bg-green-500/10 text-green-600'
        },
        {
            title: 'Trusted Brand',
            description: 'Recognized as one of India\'s best stock market institutes with 2000+ students.',
            icon: ShieldCheck,
            color: 'bg-orange-500/10 text-orange-600'
        }
    ]

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4 border border-primary/20">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 leading-tight">
                            Elevate Your <span className="text-primary italic">Trading Intelligence</span>
                        </h2>
                        <p className="text-lg text-text-secondary">
                            We provide the bridge between theoretical knowledge and professional market execution with our unique Taraju methodology.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group p-8 rounded-[2.5rem] bg-gray-50/50 hover:bg-white border border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className={`${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm`}>
                                <reason.icon size={30} />
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-[0.03]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px]"></div>
            </div>
        </section>
    )
}

export default WhyChooseUs
