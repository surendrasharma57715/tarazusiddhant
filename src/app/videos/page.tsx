import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'Videos - Tarazu Siddhant',
    description: 'Watch our trading tutorials and educational videos',
}

export default function VideosPage() {
    return (
        <div className="min-h-screen pt-32 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                        Videos
                    </h1>
                    <p className="text-xl text-text-secondary mb-8">
                        This page is under construction
                    </p>
                    <div className="bg-white shadow-lg rounded-2xl p-8 border-2 border-primary/20">
                        <p className="text-lg text-text-primary mb-6">
                            Video content will be added in the next step.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-700 transition-all duration-300"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
