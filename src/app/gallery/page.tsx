'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GalleryItem from '@/components/gallery/GalleryItem'
import Lightbox from '@/components/gallery/Lightbox'
import { Image as ImageIcon, Camera, LayoutGrid } from 'lucide-react'

// Gallery data using local Surendra Kumar images multiple times as requested
const galleryImages = [
    {
        src: '/images/img1.jpeg',
        alt: 'Tarazu Siddhant Gallery Image 1',
        title: 'Trading Excellence 1',
    },
    {
        src: '/images/img2.jpeg',
        alt: 'Tarazu Siddhant Gallery Image 2',
        title: 'Mentorship Session 2',
    },
    {
        src: '/images/img3.jpeg',
        alt: 'Tarazu Siddhant Gallery Image 3',
        title: 'Market Analysis 3',
    },
    {
        src: '/images/img4.jpeg',
        alt: 'Tarazu Siddhant Gallery Image 4',
        title: 'Student Growth 4',
    },
    {
        src: '/images/img5.jpeg',
        alt: 'Tarazu Siddhant Gallery Image 5',
        title: 'Trading Workshop 5',
    },
    {
        src: '/images/img6.jpeg',
        alt: 'Tarazu Siddhant Gallery Image 6',
        title: 'Community Success 6',
    }
]

export default function GalleryPage() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    const openLightbox = (index: number) => setLightboxIndex(index)
    const closeLightbox = () => setLightboxIndex(null)
    const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null))
    const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null))

    return (
        <div className="min-h-screen bg-slate-50 pt-40 pb-20">
            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
                    >
                        <Camera size={16} />
                        <span>Experience the Excellence</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-text-primary mb-6 font-heading"
                    >
                        Our <span className="text-primary italic">Gallery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-text-secondary max-w-2xl mx-auto"
                    >
                        Peek into our professional training sessions, live market workshops, and successful community events at Tarazu Siddhant Academy.
                    </motion.p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {galleryImages.map((image, index) => (
                        <GalleryItem
                            key={index}
                            image={image}
                            index={index}
                            onClick={() => openLightbox(index)}
                        />
                    ))}
                </div>

                {/* Info Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center border-t border-gray-200 pt-10"
                >
                    <div className="flex items-center justify-center gap-2 text-text-light mb-2">
                        <ImageIcon size={20} />
                        <span className="font-medium">{galleryImages.length} Moments Captured</span>
                    </div>
                    <p className="text-sm text-text-light italic">
                        More images being added regularly as our community grows.
                    </p>
                </motion.div>
            </div>

            {/* Lightbox Integration */}
            <Lightbox
                images={galleryImages}
                currentIndex={lightboxIndex}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </div>
    )
}
