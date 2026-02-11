'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface LightboxProps {
    images: { src: string; alt: string; title?: string }[]
    currentIndex: number | null
    onClose: () => void
    onPrev: () => void
    onNext: () => void
}

export default function Lightbox({
    images,
    currentIndex,
    onClose,
    onPrev,
    onNext,
}: LightboxProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
        }

        if (currentIndex !== null) {
            document.body.style.overflow = 'hidden'
            window.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            document.body.style.overflow = 'unset'
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [currentIndex, onClose, onPrev, onNext])

    if (currentIndex === null) return null

    const currentImage = images[currentIndex]

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
                onClick={onClose}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
                    aria-label="Close lightbox"
                >
                    <X size={32} />
                </button>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                onPrev()
                            }}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-3 rounded-full"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                onNext()
                            }}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-3 rounded-full"
                            aria-label="Next image"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </>
                )}

                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="relative w-full h-full flex flex-col items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                        <Image
                            src={currentImage.src}
                            alt={currentImage.alt}
                            fill
                            className="object-contain"
                            priority
                            sizes="100vw"
                        />
                    </div>
                    {currentImage.title && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="mt-6 text-center"
                        >
                            <h3 className="text-white text-xl md:text-2xl font-semibold font-heading">
                                {currentImage.title}
                            </h3>
                            <p className="text-white/60 mt-1">
                                {currentIndex + 1} / {images.length}
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
