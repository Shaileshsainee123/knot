"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, ZoomIn } from "lucide-react"
import Heading from "@/components/resuable_components/Heading"
import { getGalleryList } from "@/lib/api/eventApi"
import { Button } from "@/components/ui/button"


const categories = ["All", "Events", "Atmosphere", "Interior"]

export default function GalleryPage() {
    const headingData = {
        title: "Gallery",
        para: "Immerse yourself in the electric atmosphere of Neon Nights through our stunning visual collection",
    }
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(false);

    //=========== function to get the Gallery Image ==================//

    const getGalleryItems = async () => {
        setLoading(true);
        try {
            const params = {
                page: currentPage,
                limit,
                ...(selectedCategory !== "All" && { name: selectedCategory }),
            };

            const response = await getGalleryList(params);

            if (response.data?.result) {
                setGalleryItems(response.data.result);
                setTotalPages(response.data?.totalPages);
            } else {
                console.error("Unexpected response format:", response.data);
            }
        } catch (error) {
            console.error("Error fetching gallery list:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedCategory !== "All") {
            setCurrentPage(1);
        } else {
            getGalleryItems();
        }
    }, [selectedCategory]);

    useEffect(() => {
        // This will run AFTER selectedCategory change and currentPage reset
        if (selectedCategory === "All" || currentPage === 1) {
            getGalleryItems();
        }
    }, [currentPage, limit,selectedCategory]);



    return (
        <div className="min-h-screen bg-gradient-dark pt-14">
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
                        {galleryItems.map((image, index) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-secondary  border border-muted"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        src={image.gallery_Image}
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
                                            <p className="text-sm text-muted">{image?.categoryName}</p>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                </motion.div>
                {!loading && galleryItems?.length > 0 && <div className="flex justify-center items-center gap-4 my-6">
                    <Button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        variant="outline"
                        className="border-primary text-primary hover:bg-[#C5A572] hover:text-black px-6 py-2"
                    >
                        Prev
                    </Button>

                    <span className="text-white text-lg">{currentPage} / {totalPages}</span>

                    <Button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        variant="outline"
                        className="border-primary text-primary hover:bg-[#C5A572] hover:text-black px-6 py-2"
                    >
                        Next
                    </Button>
                </div>}
            </div>


            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center  justify-center p-4 bg-black/90 backdrop-blur-sm"
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
                                className="absolute top-4 right-4 z-10 p-2 rounded-full border border-primmary bg-black/50 text-white hover:bg-[#c5a572]/70 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </motion.button>

                            {/* Image */}
                            <img
                                src={selectedImage?.gallery_Image || "/placeholder.svg"}
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
                                    <span className="text-primary font-semibold">{selectedImage.categoryName}</span>
                                    <div className="flex items-center gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-2 rounded-full bg-primary text-white hover:bg-[#c5a572]/80 transition-colors"
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
