import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'Training Courses - Tarazu Siddhant',
    description: 'Explore our comprehensive trading courses',
}

export default function CoursesPage() {
    return (
        <div className="min-h-screen pt-32 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                        Training Courses
                    </h1>
                    <p className="text-xl text-text-secondary mb-8">
                        This page is under construction
                    </p>
                    <div className="bg-white shadow-lg rounded-2xl p-8 border-2 border-primary/20">
                        <p className="text-lg text-text-primary mb-6">
                            Course content will be added in the next step.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-full hover:bg-gray-700 transition-all duration-300"
                            >
                                ← Back to Home
                            </Link>
                            <Link
                                href="https://academy.tarajusiddhant.com/courses"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-700 transition-all duration-300"
                            >
                                View Live Courses →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
