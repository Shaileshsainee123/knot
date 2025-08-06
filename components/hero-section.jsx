"use client"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const MotionButton = motion.create(Button);
const MotionDiv = motion.create('div')


export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative bg-gradient-to-b from-black via-gray-900 to-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=luxurious%20nightclub%20interior%20with%20dark%20atmosphere%2C%20gold%20accents%2C%20elegant%20lighting%2C%20dance%20floor%2C%20VIP%20section%2C%20premium%20bottles%2C%20atmospheric%20lighting%2C%20professional%20photography%2C%20high-end%20nightlife&width=1920&height=1080&seq=hero1&orientation=landscape')`,
        }}
      />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration:0.5,delay:0.3 }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative  flex items-center justify-center">

            <Image src="/triangle.png"
              alt="triangle"
              width={232}
              height={232}
              className="w-58 animate-eye-zoom-in" />

            <Image src="/eye.png"
              alt="eye"
              width={116}
              height={116}
              className="absolute w-29 object-contain mb-3 opacity-0 animate-eye-zoom-out" />
          </div>


          <MotionDiv
            animate={{
              scale: [1, 1.1, 1], // Scale up and back down
            }}
            transition={{
              duration: 1,
              repeat: 1,
              repeatType: "reverse",
              ease: "easeInOut",
            }} >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 p-2 bg-gradient-heading bg-clip-text text-transparent drop-shadow-[0_0px_34px_#FF0004]">
              Elevate Your Night
            </h1>
          </MotionDiv>
          <p className="text-xl md:text-2xl text-secondary mb-10 max-w-2xl">
            Delhi's premier nightlife destination where luxury meets rhythm. Experience unforgettable nights in the
            heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="#booking">
            <MotionButton
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-black px-8 py-3 text-lg font-semibold">
              Book Now
            </MotionButton>
            </Link>
            <Link href="/events">
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="outline"
              className="bg-transparent border-primary text-primary hover:bg-[#C5A572] hover:text-black px-8 py-3 text-lg font-semibold"
            >
              View Events
            </MotionButton>
            </Link>
          </div>
        </MotionDiv>
      </div>
      <div className="absolute bottom-8 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
        <ChevronDown className="text-primary w-8 h-8" />
      </div>
    </section>
  )
}
