'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { FaChartLine } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'ABOUT US', href: '/about' },
        {
            name: 'TRAINING COURSE',
            href: '#',
            dropdown: [
                { name: 'FREE COURSE', href: 'https://www.youtube.com/@LTP1977' },
                { name: 'PAID COURSE', href: 'https://academy.tarajusiddhant.com/' },
            ]
        },
        { name: 'GALLERY', href: '/gallery' },
        { name: "WHAT'S NEW", href: '/news' },
        { name: 'CONTACT US', href: '/contact' },
    ]

    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Static Bar - Formulas */}
            <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-purple-600 text-white py-1.5 px-2 border-b border-white/5">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center gap-2 sm:gap-6 text-[7px] min-[400px]:text-[8px] sm:text-xs md:text-sm font-medium tracking-tighter sm:tracking-tight text-center uppercase whitespace-nowrap overflow-hidden">
                        <span className="flex items-center gap-1 flex-shrink-0">
                            ONE DAY FORMULAS
                        </span>
                        <span className="opacity-40 text-xs font-light flex-shrink-0">|</span>
                        <span className="flex items-center gap-1 flex-shrink-0">
                            OPTION CHAIN PRACTICAL APPROACH
                        </span>
                        <span className="opacity-40 text-xs font-light flex-shrink-0">|</span>
                        <span className="flex items-center gap-1 flex-shrink-0">
                            TARAZU SIDDHANT MASTER APPROACH
                        </span>
                    </div>
                </div>
            </div>

            {/* Announcement Bar - Marquee Batch Info */}
            <div className="bg-black text-white py-1.5 overflow-hidden border-b border-white/10">
                <div className="relative flex">
                    <div className="flex animate-marquee-fast whitespace-nowrap">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <span key={`batch-${item}`} className="mx-12 text-xs md:text-sm font-bold flex items-center text-white">
                                <span className="w-1.5 h-1.5 bg-primary rounded-sm mr-3"></span>
                                NEW BATCH : UPCOMING
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav
                className={`bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 md:space-x-3 group flex-shrink-0">
                            <div className="bg-primary p-1.5 md:p-2.5 rounded-lg group-hover:bg-primary-700 transition-colors flex-shrink-0">
                                <FaChartLine className="text-white text-lg md:text-2xl" />
                            </div>
                            <div className="flex flex-col whitespace-nowrap">
                                <span className="text-xs sm:text-lg md:text-2xl font-black text-primary tracking-tighter sm:tracking-tight leading-none uppercase">
                                    TARAZU SIDDHANT
                                </span>
                                <span className="text-[8px] sm:text-xs text-text-secondary font-semibold">
                                    Trading Education Mentor
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative group py-4"
                                    onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    {link.dropdown ? (
                                        <button className="flex items-center gap-1 text-sm font-semibold text-text-primary hover:text-primary transition-colors duration-200 uppercase">
                                            {link.name}
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-sm font-semibold text-text-primary hover:text-primary transition-colors duration-200 relative group uppercase"
                                        >
                                            {link.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                        </Link>
                                    )}

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {link.dropdown && openDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl border border-gray-100 py-2 mt-0 z-50"
                                            >
                                                {link.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block px-5 py-3 text-sm font-medium text-text-primary hover:bg-primary/5 hover:text-primary transition-all uppercase"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:block">
                            <Link
                                href="https://academy.tarajusiddhant.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-purple-500 text-white font-semibold rounded-full hover:from-primary-700 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Start Your Journey
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-text-primary" />
                            ) : (
                                <Menu className="w-6 h-6 text-text-primary" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="lg:hidden bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
                        >
                            <div className="container mx-auto px-4 py-4">
                                <div className="flex flex-col space-y-1">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            {link.dropdown ? (
                                                <div className="flex flex-col">
                                                    <button
                                                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                                                        className="w-full flex items-center justify-between text-sm font-bold text-text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all duration-200 uppercase"
                                                    >
                                                        {link.name}
                                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                                    </button>
                                                    <AnimatePresence>
                                                        {openDropdown === link.name && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                className="overflow-hidden pl-4 bg-gray-50/50 rounded-xl mt-1"
                                                            >
                                                                {link.dropdown.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.name}
                                                                        href={subItem.href}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        onClick={() => setIsMenuOpen(false)}
                                                                        className="text-xs font-semibold text-text-secondary hover:text-primary px-4 py-3 block uppercase"
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="text-sm font-bold text-text-primary hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all duration-200 block uppercase"
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: navLinks.length * 0.05 }}
                                        className="pt-4"
                                    >
                                        <Link
                                            href="https://academy.tarajusiddhant.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-bold rounded-full hover:from-primary-700 hover:to-purple-600 transition-all duration-300 shadow-lg"
                                        >
                                            Start Your Journey
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}

export default Header
