'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Maximize2 } from 'lucide-react'

interface GalleryItemProps {
    image: { src: string; alt: string; title?: string }
    index: number
    onClick: () => void
}

export default function GalleryItem({ image, index, onClick }: GalleryItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-500"
            onClick={onClick}
        >
            <div className="aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-square relative overflow-hidden">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between"
                    >
                        <div>
                            {image.title && (
                                <h3 className="text-white font-semibold text-lg font-heading leading-tight">
                                    {image.title}
                                </h3>
                            )}
                            <p className="text-white/70 text-sm mt-1">View Full Image</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                            <Maximize2 size={20} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
