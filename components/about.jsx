'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { apiJson } from "@/lib/api/axiosBase"
import { useState, useEffect } from "react"
import StatsPlaceholder from "./resuable_components/placeholders/StatsPlaceholder"


const MotionDiv = motion.create('div')
export default function AboutSection() {
  const [aboutData, setAboutData] = useState({})
  const [loading, setLoading] = useState(false)

  //=============function to get the about data==================//

  const getAboutData = async () => {
    setLoading(true);
    try {
      const response = await apiJson.get("api/Website/getAboutUs");

      if (response?.data?.status === 1) {
        setAboutData(response?.data?.result); // assuming data is under `data`
      } else {
        console.error("Failed to fetch about data:", response.data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error while fetching about data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAboutData();
  }, []);


  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-10">
        <h2 className="block md:hidden text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-heading bg-clip-text text-transparent">
          About Knot Delhi
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Left Text Section */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
          >
            <h2 className="hidden md:block text-3xl md:text-4xl font-bold mb-6 bg-gradient-heading bg-clip-text text-transparent">
              {aboutData?.title ? aboutData?.title : "About Knot Delhi"}
            </h2>
            <div className="text-secondary mb-6 text-center md:text-left leading-relaxed" dangerouslySetInnerHTML={{ __html: aboutData?.description }} />

            {/* Stats */}
            {loading ? (
              <StatsPlaceholder />
            ) : (<div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { number: `${aboutData?.year_of_excellence}+`, label: "Years of Excellence" },
                { number: `${aboutData?.events_hosted}+`, label: "Events Hosted" },
                { number: `${aboutData?.internationalDjs}+`, label: "International DJs" },
                { number: `${aboutData?.happy_customers}K+`, label: "Happy Customers" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center border border-primary rounded-md p-3 transition transform duration-300 ease-in hover:scale-105 hover:shadow-[0_10px_20px_rgba(197,165,114,0.2)]"
                >
                  <span className="text-primary text-3xl font-bold mb-2">{stat.number}</span>
                  <span className="text-muted text-center">{stat.label}</span>
                </div>
              ))}
            </div>)}
            <Link href="/contact">
              <Button className="px-6 py-3 font-semibold w-full !rounded-button">
                Contact Us
              </Button>
            </Link>
          </MotionDiv>

          {/* Right Image Section */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mb-8 md:mb-0 relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-primary"></div>
              <Image
                src={aboutData?.image || "/about.png"}
                alt="Knot Delhi Interior"
                width={400}
                height={400}
                className="w-full max-h-[600px] rounded relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-primary"></div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
