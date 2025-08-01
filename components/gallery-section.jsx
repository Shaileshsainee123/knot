'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Heading from "./resuable_components/Heading";
import { getGalleryList } from "@/lib/api/eventApi";
import { useEffect, useState } from "react";
import Link from "next/link";



export default function GallerySection() {
  const HeadingData = {
    title: "Gallery",
    para: "Glimpses of unforgettable nights at Knot Delhi. Experience the energy and luxury of our events."
  }
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(false);

  //=========== function to get the events ==================//

  const getGalleryItems = async () => {
    setLoading(true);
    try {
      const response = await getGalleryList();

      if (response.data?.result) {
        setGalleryItems(response.data.result);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching event list:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getGalleryItems();
  }, []);
  return (
    <section id="gallery" className="py-14 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <Heading data={HeadingData} />

        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.slice(0, 8).map((image, index) => (
            <div key={image.id} className="overflow-hidden rounded-lg group">
              <Image
                src={image?.gallery_Image || "/placeholder.svg"}
                alt={image.categoryName + " " + index}
                width={400}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>


        {/* mobile view gallery */}
        <div className="grid  md:hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.slice(0, 4).map((image, index) => (
            <div key={image.id} className="overflow-hidden rounded-lg group">
              <Image
                src={image?.gallery_Image || "/placeholder.svg"}
                alt={image.categoryName + " " + index}
                width={400}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      {!loading && galleryItems?.length > 0 &&  <div className="text-center mt-12">
          <Link href="/gallery">
          <Button
            variant="outline"
            className="bg-transparent border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-black px-8 py-3"
          >
            View Full Gallery
          </Button>
          </Link>
        </div>}
      </div>
    </section>
  )
}
