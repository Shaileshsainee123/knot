'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"


const MotionDiv = motion.create('div')

const stats = [
  { number: "5+", label: "Years of Excellence" },
  { number: "200+", label: "Events Hosted" },
  { number: "50+", label: "International DJs" },
  { number: "100K+", label: "Happy Customers" },
]

export default function AboutSection() {
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
              About Knot Delhi
            </h2>
            <p className="text-secondary mb-6 text-center md:text-left leading-relaxed">
              Established in 2018, Knot Delhi has quickly become the pinnacle of Delhi's nightlife scene. Our club
              offers an unparalleled experience combining luxurious ambiance, state-of-the-art sound systems, and
              world-class service.
            </p>
            <p className="text-secondary mb-8 text-center md:text-left leading-relaxed">
              Located in the heart of Delhi, our 15,000 sq. ft. venue features multiple dance floors, VIP sections, and
              a rooftop lounge with breathtaking city views. Our team of mixologists crafts signature cocktails while
              our resident DJs and international guests create the perfect soundtrack for your night.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center border border-primary rounded-md p-3 transition transform duration-300 ease-in hover:scale-105 hover:shadow-[0_10px_20px_rgba(197,165,114,0.2)]"
                >
                  <span className="text-primary text-3xl font-bold mb-2">{stat.number}</span>
                  <span className="text-muted text-center">{stat.label}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary font-semibold text-black hover:bg-[#C5A572]/80 px-6 py-3 w-full transition-all duration-300 ease-in-out !rounded-button">
              Contact Us
            </Button>
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
                src="/about.png"
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
