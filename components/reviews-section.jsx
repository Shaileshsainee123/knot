"use client"

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Heading from "./resuable_components/Heading";
import { motion, useAnimation } from "framer-motion"
import { useEffect, useMemo, useState } from "react";
import { apiJson } from "@/lib/api/axiosBase";
import ReviewPlaceholder from "./resuable_components/placeholders/ReviewPlaceholder";

const MotionDiv = motion.create('div')

export default function ReviewsSection() {

  const [isLoading, setIsLoading] = useState(true)
  const [reviewsData, setReviewsData] = useState([])

  //======= fetching reviews data from API =======//
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await apiJson.get("api/Website/getAllReview")
        if (res?.data.status === 1) {
          setReviewsData(res?.data?.result || [])
          setIsLoading(false)
        } else {
          console.error("Failed to fetch reviews data")
        }
      } catch (error) {
        console.error("Error fetching reviews data:", error)
      }
    }
    fetchReviews()
  }, [])
  //======= Duplicating reviews for animation effect =======//
  const duplicatedReviews = useMemo(() => {
    return reviewsData.length > 0 ? [...reviewsData, ...reviewsData] : [];
  }, [reviewsData]);

  //======= Generating initials from user names =======//
  const getInitials = (name) => {
    if (!name) return "";
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };

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
              {isLoading ? ( Array.from({ length: 3 }).map((_, index) => (<ReviewPlaceholder key={index} index={index} /> )) ) : (duplicatedReviews.map((review, index) => (
                <div key={`left-${index}`} className="flex-shrink-0  max-w-[350px] bg-[linear-gradient(#1E1E1ECC,#0A0A0AE5)] p-5 rounded-lg">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                        <span className="text-[#C5A572] font-bold">{getInitials(review.userName)}</span>
                      </div>
                      <div>
                        <h4 className="text-white text-base font-semibold">{review.userName}</h4>
                        <p className="text-muted text-sm"> {new Date(review.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">"{review.description}"</p>
                </div>
              )))}
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
              { isLoading ? ( Array.from({ length: 3 }).map((_, index) => (<ReviewPlaceholder key={index} index={index} /> )) ) : (duplicatedReviews.map((review, index) => (
                <div key={`left-${index}`} className="flex-shrink-0  w-[360px] bg-[linear-gradient(#1E1E1ECC,#0A0A0AE5)] p-5 rounded-lg">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                        <span className="text-[#C5A572] font-bold">{getInitials(review.userName)}</span>
                      </div>
                      <div>
                        <h4 className="text-white text-base font-semibold">{review?.userName}</h4>
                        <p className="text-muted text-sm"> {new Date(review?.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">"{review.description}"</p>
                </div>
              )))}
            </MotionDiv>
          </div>
        </div>


      </div>
    </section>
  )
}
