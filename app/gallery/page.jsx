"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, ZoomIn } from "lucide-react"
import Heading from "@/components/resuable_components/Heading"

const galleryImages = [
    {
        id: 1,
        src: "https://readdy.ai/api/search-image?query=luxurious%20nightclub%20interior%20with%20dark%20atmosphere%2C%20gold%20accents%2C%20elegant%20lighting%2C%20dance%20floor%2C%20VIP%20section%2C%20premium%20bottles%2C%20atmospheric%20lighting%2C%20professional%20photography%2C%20high-end%20nightlife&width=1920&height=1080&seq=hero1&orientation=landscape",
        title: "Electric Night",
        category: "Events",
    },
    {
        id: 2,
        src: "/placeholder.svg?height=600&width=800",
        title: "DJ Performance",
        category: "Atmosphere",
    },
    {
        id: 3,
        src: "/placeholder.svg?height=600&width=800",
        title: "Neon Vibes",
        category: "Atmosphere",
    },
    {
        id: 4,
        src: "/placeholder.svg?height=600&width=800",
        title: "Dance Floor",
        category: "Events",
    },
    {
        id: 5,
        src: "/placeholder.svg?height=600&width=800",
        title: "VIP Lounge",
        category: "Interior",
    },
    {
        id: 6,
        src: "/placeholder.svg?height=600&width=800",
        title: "Light Show",
        category: "Atmosphere",
    },
    {
        id: 7,
        src: "/placeholder.svg?height=600&width=800",
        title: "Crowd Energy",
        category: "Events",
    },
    {
        id: 8,
        src: "/placeholder.svg?height=600&width=800",
        title: "Bar Scene",
        category: "Interior",
    },
    {
        id: 9,
        src: "/placeholder.svg?height=600&width=800",
        title: "Laser Lights",
        category: "Atmosphere",
    },
]

const categories = ["All", "Events", "Atmosphere", "Interior"]

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedImage, setSelectedImage] = useState(null)

    const filteredImages =
        selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

    const headingData = {
        title: "Gallery",
        para: "Immerse yourself in the electric atmosphere of Neon Nights through our stunning visual collection",
    }

    return (
        <div className="min-h-screen bg-gradient-dark pt-20">
            {/* Header */}
            <div className="relative pt-16">
                <div className="container mx-auto px-4">
                    <Heading data={headingData} />
                </div>
            </div>

            {/* Category Filter */}
            <div className="container mx-auto px-4 py-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category
                                ? "bg-primary text-black"
                                : "bg-gray-800 text-secondary hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                    <AnimatePresence>
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-secondary  border border-muted"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                        whileHover={{ scale: 1.1 }}
                                    />

                                    {/* Overlay */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >

                                        {/* Zoom Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setSelectedImage(image)
                                            }}
                                            className="absolute inset-0 flex items-center justify-center z-10"
                                        >
                                            <div className="p-4 rounded-full bg-primary text-white backdrop-blur-sm">
                                                <ZoomIn className="w-6 h-6" />
                                            </div>
                                        </motion.button>

                                    </div>
                                </div>

                                {/* Image Info */}
                                <div className="p-4 border-t border-gray-800">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                                                {image.title}
                                            </h3>
                                            <p className="text-sm text-muted">{image.category}</p>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative max-w-3xl max-h-[80vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full border border-primmary bg-black/50 text-white hover:bg-black/70 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </motion.button>

                            {/* Image */}
                            <img
                                src={selectedImage.src || "/placeholder.svg"}
                                alt={selectedImage.title}
                                className="w-full h-full object-contain rounded-lg"
                            />

                            {/* Image Info */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg"
                            >
                                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-purple-400 font-semibold">{selectedImage.category}</span>
                                    <div className="flex items-center gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                                        >
                                            <Download className="w-5 h-5" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
