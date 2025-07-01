'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from 'framer-motion'
import Heading from "./resuable_components/Heading";

const MotionDiv = motion.create('div');

const galleryImages = [
  {
    id: 1,
    // src: "https://readdy.ai/api/search-image?query=luxurious%20nightclub%20with%20crowd%20dancing%2C%20professional%20lighting%2C%20elegant%20atmosphere%2C%20high-end%20nightlife%2C%20professional%20photography&width=400&height=400&seq=gallery1&orientation=squarish",
    src: "./galleryImage/gallery.png?width=400&height=400",
    alt: "Club Night",
  },
  {
    id: 2,
    // src: "https://readdy.ai/api/search-image?query=premium%20champagne%20bottles%20with%20sparklers%20in%20luxurious%20nightclub%2C%20VIP%20service%2C%20professional%20photography%2C%20high-end%20nightlife&width=400&height=400&seq=gallery2&orientation=squarish",
    src: "./galleryImage/gallery1.png?width=400&height=400",
    alt: "VIP Service",
  },
  {
    id: 3,
    // src: "https://readdy.ai/api/search-image?query=DJ%20performing%20at%20luxurious%20nightclub%2C%20professional%20equipment%2C%20atmospheric%20lighting%2C%20high-end%20nightlife%2C%20professional%20photography&width=400&height=400&seq=gallery3&orientation=squarish",
    src: "./galleryImage/gallery2.png?width=400&height=400",
    alt: "DJ Performance",
  },
  {
    id: 4,
    // src: "https://readdy.ai/api/search-image?query=elegant%20cocktails%20at%20luxurious%20nightclub%20bar%2C%20premium%20drinks%2C%20professional%20photography%2C%20high-end%20nightlife&width=400&height=400&seq=gallery4&orientation=squarish",
    src: "./galleryImage/gallery3.png?width=400&height=400",
    alt: "Signature Cocktails",
  },
  {
    id: 5,
    // src: "https://readdy.ai/api/search-image?query=VIP%20lounge%20area%20in%20luxurious%20nightclub%2C%20comfortable%20seating%2C%20premium%20atmosphere%2C%20professional%20photography%2C%20high-end%20nightlife&width=400&height=400&seq=gallery5&orientation=squarish",
    src: "./galleryImage/gallery4.png?width=400&height=400",
    alt: "VIP Lounge",
  },
  {
    id: 6,
    // src: "https://readdy.ai/api/search-image?query=crowd%20enjoying%20at%20luxurious%20nightclub%20event%2C%20dancing%2C%20atmospheric%20lighting%2C%20professional%20photography%2C%20high-end%20nightlife&width=400&height=400&seq=gallery6&orientation=squarish",
    src: "./galleryImage/gallery5.png?width=400&height=400",
    alt: "Club Crowd",
  },
  {
    id: 7,
    // src: "https://readdy.ai/api/search-image?query=rooftop%20section%20of%20luxurious%20nightclub%2C%20city%20view%2C%20night%20atmosphere%2C%20elegant%20setting%2C%20professional%20photography%2C%20high-end%20nightlife&width=400&height=400&seq=gallery7&orientation=squarish",
    src: "./galleryImage/gallery6.png?width=400&height=400",
    alt: "Rooftop View",
  },
  {
    id: 8,
    // src: "https://readdy.ai/api/search-image?query=themed%20party%20at%20luxurious%20nightclub%2C%20special%20decorations%2C%20professional%20lighting%2C%20elegant%20atmosphere%2C%20professional%20photography%2C%20high-end%20nightlife&width=400&height=400&seq=gallery8&orientation=squarish",
    src: "./galleryImage/gallery7.png?width=400&height=400",
    alt: "Themed Party",
  },
]

export default function GallerySection() {
    const HeadingData = {
    title: "Gallery",
    para: "Glimpses of unforgettable nights at Knot Delhi. Experience the energy and luxury of our events."
  }
  return (
    <section id="gallery" className="py-14 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <Heading data={HeadingData} />

        <div className="hidden  md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg group">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* mobile view gallery */}
        <div className="grid  md:hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.slice(0, 4).map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg group">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="bg-transparent border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-black px-8 py-3"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
