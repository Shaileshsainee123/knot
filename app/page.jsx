"use client"
import React, { Suspense, lazy } from "react"
import Loader from "@/components/Loader"

// Lazy-loaded components
const HeroSection = lazy(() => import("@/components/hero-section"))
const AboutSection = lazy(() => import("@/components/about"))
const EventsSection = lazy(() => import("@/components/events-section"))
const BookingSection = lazy(() => import("@/components/booking-section"))
const GallerySection = lazy(() => import("@/components/gallery-section"))
const ReviewsSection = lazy(() => import("@/components/reviews-section"))
const NewsletterSection = lazy(() => import("@/components/newsletter-section"))

export default function HomePage() {
  return (
   <main className="bg-black text-white">
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <BookingSection />
        <GallerySection />
        <ReviewsSection />
        <NewsletterSection />
      </Suspense>
    </main>
  )
}
