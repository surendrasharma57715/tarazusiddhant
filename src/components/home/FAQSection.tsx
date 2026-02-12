'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Plus, Minus } from 'lucide-react'

const faqs = [
    {
        question: "What exactly is the Tarazu Siddhant (Option Chain) principle?",
        answer: "Tarazu Siddhant is a unique data-driven approach based on the 'Balance' of Option Chain data. It helps traders identify where the major smart money is positioned and predict market reversals with high accuracy by analyzing Support and Resistance through the lens of Option Greeks and Volume."
    },
    {
        question: "I am a complete beginner. Can I still join the academy?",
        answer: "Absolutely! Our Silver Membership is specifically designed for beginners. We start from the absolute basics of stock market and then gradually move towards advanced Option Chain strategies. You don't need any prior experience to start."
    },
    {
        question: "Do you provide Live Market training or only recorded videos?",
        answer: "We believe trading is best learned in live markets. Our Gold and Diamond memberships include access to Live Market sessions where we analyze data together in real-time. Diamond members also get one-on-one personal mentorship."
    },
    {
        question: "How is Tarazu Siddhant different from other technical analysis methods?",
        answer: "Traditional technical analysis relies on lagging indicators (past price). Tarazu Siddhant relies on leading data (Option Chain), which shows where traders are putting their money 'now'. This provides a significant edge in predicting future price movements."
    },
    {
        question: "What kind of support will I get after joining a plan?",
        answer: "Every student gets access to our exclusive community support. Depending on your plan, you also get live Q&A sessions, direct mentorship from Surendra Sharma, and weekly market analysis reports to keep you ahead of the curve."
    },
    {
        question: "Can I access the course on my mobile device?",
        answer: "Yes, our Learning Management System (LMS) is fully responsive and mobile-friendly. You can learn on-the-go using your smartphone, tablet, or laptop anytime, anywhere."
    }
]

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className={`mb-4 overflow-hidden rounded-3xl transition-all duration-300 border-2 ${isOpen ? 'border-primary bg-primary/5 shadow-lg' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 font-bold'}`}>
                        <HelpCircle size={20} />
                    </div>
                    <span className={`text-sm md:text-lg font-black uppercase tracking-tight ${isOpen ? 'text-primary' : 'text-text-primary'}`}>
                        {question}
                    </span>
                </div>
                <div className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus className="text-primary" /> : <Plus className="text-gray-400" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-8 pb-8 md:px-20 md:pb-10 pt-0">
                            <p className="text-text-secondary text-sm md:text-base leading-relaxed font-medium">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black tracking-[0.2em] uppercase mb-4 border border-primary/20">
                                Common Queries
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-heading mb-4 uppercase tracking-tight">
                                Frequently Asked <span className="text-primary">Questions</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                            <p className="text-text-secondary font-bold text-sm tracking-wide uppercase opacity-70">
                                Everything you need to know about our trading academy
                            </p>
                        </motion.div>
                    </div>

                    <div className="relative">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <FAQItem
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === idx}
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Support CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-16 text-center bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-inner"
                    >
                        <h4 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">Still have questions?</h4>
                        <p className="text-gray-500 mb-8 font-medium">We&apos;re here to help you start your trading journey with confidence.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/918209203234"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#25D366] text-white font-black rounded-2xl hover:bg-[#128C7E] transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
                            >
                                WhatsApp Us
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-white border-2 border-primary/20 text-primary font-black rounded-2xl hover:border-primary transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
                            >
                                Contact Support
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection
