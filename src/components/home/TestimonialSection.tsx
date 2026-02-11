'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
    {
        name: 'AMIT SHARMA',
        review: 'The Tarazu Principle changed my approach to Nifty options. Highly recommended for anyone struggling with intraday balancing.',
        rating: 5
    },
    {
        name: 'RAJESH KUMAR',
        review: "Surendra sir's mentorship is exceptional. Practical trading at its best, focusing on real-time market movements rather than just theory.",
        rating: 5
    },
    {
        name: 'SNEHA PATEL',
        review: 'I finally understand option chain analysis. 95% success rate is real if you follow the rules strictly. Best investment in myself.',
        rating: 5
    },
    {
        name: 'VIKRAM SINGH',
        review: 'Best trading academy in India. The logic is so simple yet powerful. My confidence in the market has grown exponentially.',
        rating: 5
    },
    {
        name: 'ANJALI GUPTA',
        review: 'Transformative experience. My losses have significantly reduced since I started applying the Taraju logic for entry and exit.',
        rating: 5
    },
    {
        name: 'MANOJ VERMA',
        review: 'Tarazu Siddhant is the holy grail for intraday traders. The way they explain the Greeks and Option Chain data is unmatched.',
        rating: 5
    },
    {
        name: 'POOJA REDDY',
        review: 'Professional teaching and great community support. The live sessions are where the real learning happens. Truly professional.',
        rating: 5
    },
    {
        name: 'ARUN KUMAR',
        review: 'Detailed step-by-step guidance on option Greeks and chain analysis. No more guesswork, only data-driven decisions now.',
        rating: 5
    },
    {
        name: 'DEEPAK JAIN',
        review: 'The most honest trading mentor I have encountered. No false promises, only hard logic and market facts. Thank you sir!',
        rating: 5
    },
    {
        name: 'SUNITA MISHRA',
        review: 'Consistency is key, and this course taught me exactly how to achieve it. The Tarazu Principle is a masterpiece.',
        rating: 5
    }
]

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Duplicate testimonials for seamless loop
    const doubledTestimonials = [...testimonials, ...testimonials]

    const nextSlide = React.useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, [])

    const prevSlide = React.useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }, [])

    // Auto-slide effect for mobile
    React.useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [nextSlide])

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4 border border-primary/20">
                            Wall of Trust
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 leading-tight">
                            What Our <span className="text-primary">Traders Say</span>
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Join thousands of successful students who have mastered the art of trading with Tarazu Siddhant.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Desktop Marquee (Visible on md and above) */}
            <div className="hidden md:flex relative overflow-x-hidden group">
                <motion.div
                    className="flex gap-6 py-4 whitespace-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 100, // Increased for much slower, smoother speed
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    whileHover={{ transition: { duration: 150 } }} // Even slower on hover
                >
                    {doubledTestimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-[300px] sm:w-[400px] bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col gap-4 whitespace-normal"
                        >
                            <div className="flex gap-0.5">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-text-secondary italic text-sm sm:text-base leading-relaxed flex-grow">
                                &quot;{item.review}&quot;
                            </p>
                            <div className="pt-4 border-t border-gray-100">
                                <h4 className="text-lg font-bold text-text-primary tracking-tight">
                                    {item.name}
                                </h4>
                                <span className="text-xs text-primary font-semibold uppercase tracking-widest">
                                    Verified Student
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* Mobile Slider (Visible on Mobile only) */}
            <div className="md:hidden px-4 relative max-w-lg mx-auto">
                <div className="relative min-h-[300px] flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.05, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 shadow-lg flex flex-col gap-3 relative w-full"
                        >
                            <div className="flex gap-0.5">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-text-secondary italic text-sm leading-relaxed">
                                &quot;{testimonials[currentIndex].review}&quot;
                            </p>
                            <div className="pt-3 border-t border-gray-200/50">
                                <h4 className="text-base font-bold text-text-primary tracking-tight">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <span className="text-[10px] text-primary font-semibold uppercase tracking-widest">
                                    Verified Student
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows on Mobile (Positioned on the card side) */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 pointer-events-none">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-gray-100 text-primary pointer-events-auto active:scale-95 transition-transform"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-gray-100 text-primary pointer-events-auto active:scale-95 transition-transform"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
