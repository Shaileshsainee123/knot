"use client"

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Heading from "./resuable_components/Heading";
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react";

const MotionDiv = motion.create('div')

const reviews = [
  {
    name: "Rajesh Kumar",
    initials: "RK",
    content:
      "The ambiance and service at Knot Delhi Club are absolutely exceptional. A perfect place for business meetings.",
    rating: 4.5,
    date: "June 15, 2025",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    content: "I've been a member for 3 years and the experience keeps getting better. Highly recommend!",
    rating: 5,
    date: "June 10, 2025",
  },
  {
    name: "Amit Patel",
    initials: "AP",
    content: "The facilities are world-class and the staff is incredibly professional. Worth every penny.",
    rating: 2.5,
    date: "April 01, 2025",
  },
  {
    name: "Sneha Gupta",
    initials: "SG",
    content: "A sanctuary in the heart of Delhi. The rooftop terrace is my favorite spot to unwind.",
    rating: 4.5,
    date: "July 03, 2025",
  },
  {
    name: "Vikram Singh",
    initials: "VS",
    content: "The attention to detail in every aspect of the club is remarkable. Truly premium experience.",
    rating: 5,
    date: "June 15, 2025",
  },
]
const duplicatedReviews = [...reviews, ...reviews]
export default function ReviewsSection() {

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const totalStars = 5

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="w-5 h-5 text-[#C5A572]" />
      )
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="w-5 h-5 text-[#C5A572]" />
      )
    }

    // Empty stars
    const remaining = totalStars - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < remaining; i++) {
      stars.push(
        <FaRegStar key={`empty-${i}`} className="w-5 h-5 text-[#C5A572]" />
      )
    }

    return stars
  }

  const leftToRightControls = useAnimation()
  const rightToLeftControls = useAnimation()

  // Start both animations on mount
  useEffect(() => {
    leftToRightControls.start({
      x: [-1920, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    })
    rightToLeftControls.start({
      x: [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    })
  }, [leftToRightControls, rightToLeftControls])

  const pause = (controls) => controls.stop()
  const resume = (controls, direction) => {
    controls.start({
      x: direction === "ltr" ? [-1920, 0] : [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    })
  }


  const HeadingData = {
    title: "What Our Guests Say",
    para: "Subscribe to our newsletter for exclusive updates, special offers, and VIP invitations to our events."
  }

  return (
    <section className="py-14 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heading data={HeadingData} />

        </div>

        <div className="space-y-10">
          {/* First Row: Left ➡️ Right */}
          <div className="overflow-hidden hidden md:block">
            <MotionDiv
              className="flex space-x-8 w-max"
              animate={leftToRightControls}
              onMouseEnter={() => pause(leftToRightControls)}
              onMouseLeave={() => resume(leftToRightControls, "ltr")}
            >
              {duplicatedReviews.map((review, index) => (
                <div key={`left-${index}`} className="flex-shrink-0  max-w-[350px] bg-[linear-gradient(#1E1E1ECC,#0A0A0AE5)] p-5 rounded-lg">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                        <span className="text-[#C5A572] font-bold">{review.initials}</span>
                      </div>
                      <div>
                        <h4 className="text-white text-base font-semibold">{review.name}</h4>
                        <p className="text-muted text-sm">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">"{review.content}"</p>
                </div>
              ))}
            </MotionDiv>
          </div>

          {/* Second Row: Right ➡️ Left */}
          <div className="overflow-hidden">
            <MotionDiv
              className="flex space-x-8 w-max"
              animate={rightToLeftControls}
              onMouseEnter={() => pause(rightToLeftControls)}
              onMouseLeave={() => resume(rightToLeftControls, "rtl")}
            >
              {duplicatedReviews.map((review, index) => (
                <div key={`left-${index}`} className="flex-shrink-0  w-[360px] bg-[linear-gradient(#1E1E1ECC,#0A0A0AE5)] p-5 rounded-lg">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                        <span className="text-[#C5A572] font-bold">{review.initials}</span>
                      </div>
                      <div>
                        <h4 className="text-white text-base font-semibold">{review.name}</h4>
                        <p className="text-muted text-sm">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">"{review.content}"</p>
                </div>
              ))}
            </MotionDiv>
          </div>
        </div>


      </div>
    </section>
  )
}
