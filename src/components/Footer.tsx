'use client'

import React from 'react'
import Link from 'next/link'
import { FaChartLine, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Courses', href: 'https://academy.tarajusiddhant.com/courses' },
        { name: 'Blog', href: '/news' },
        { name: 'Contact', href: '/contact' },
    ]

    const courses = [
        { name: 'Option Chain Tarazu Principle', href: '/courses/option-chain' },
        { name: 'Intraday Trading', href: '/courses/intraday' },
        { name: 'Technical Analysis', href: '/courses/technical-analysis' },
        { name: 'Risk Management', href: '/courses/risk-management' },
    ]

    const legal = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Refund Policy', href: '/refund-policy' },
        { name: 'Shipping Policy', href: '/shipping-policy' },
    ]

    const socialLinks = [
        { icon: FaYoutube, href: 'https://youtube.com/@ltp1977?si=93R12yP1b4B1Q0Yy', label: 'YouTube' },
        { icon: FaInstagram, href: 'https://www.instagram.com/tarajusiddhant.com_?igsh=cTAxNTk0N29pNjJz', label: 'Instagram' },
        { icon: FaWhatsapp, href: 'https://whatsapp.com/channel/0029VbBWHrYF6smyfv2IAh2L', label: 'WhatsApp Channel' },
        { icon: FaFacebook, href: 'https://www.facebook.com/share/1TSoyHDGyJ/', label: 'Facebook' },
    ]

    return (
        <footer className="bg-dark text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <Link href="/" className="flex items-center space-x-3 mb-4">
                            <div className="bg-primary p-2 rounded-lg">
                                <FaChartLine className="text-white text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">Tarazu Siddhant</span>
                                <span className="text-xs text-gray-400">Trading Education Mentor</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm mb-4">
                            Empowering traders with comprehensive Option Chain analysis and proven trading strategies. Join 2000+ successful students.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Our Courses</h3>
                        <ul className="space-y-2">
                            {courses.map((course) => (
                                <li key={course.name}>
                                    <span className="text-gray-400 text-sm">
                                        {course.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MdEmail className="text-primary mt-1 flex-shrink-0" />
                                <a
                                    href="mailto:support@tarajusiddhant.com"
                                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                                >
                                    support@tarajusiddhant.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MdPhone className="text-primary mt-1 flex-shrink-0" />
                                <a
                                    href="tel:+918209203234"
                                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                                >
                                    +91 82092 03234
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MdLocationOn className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    Kalwar Road, Jaipur<br />Rajasthan, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Tarazu Siddhant. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
