"use client"

import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#C5A572] rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-[#C5A572] rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-[#C5A572] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-[#C5A572] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">

          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#C5A572] via-[#e9d5a9] to-[#C5A572] bg-clip-text text-transparent mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-[#C5A572] mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Page Not Found</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Looks like this page got lost in the night. The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-gray-400">Don't worry, the party is still going on at our main venue!</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/">
              <Button className="bg-[#C5A572] text-black hover:bg-[#C5A572]/80 px-8 py-3 text-lg font-semibold">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>

            <Button
              variant="outline"
              className="bg-transparent border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-black px-8 py-3 text-lg font-semibold"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-800 pt-8 w-full">
            <h3 className="text-lg font-semibold mb-6 text-[#C5A572]">Popular Pages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="#events" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 py-2">
                Events
              </Link>
              <Link href="#gallery" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 py-2">
                Gallery
              </Link>
              <Link href="#blog" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 py-2">
                Blog
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 py-2">
                Contact
              </Link>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800 w-full max-w-md">
            <div className="flex items-center justify-center mb-3">
              <Search className="w-5 h-5 text-[#C5A572] mr-2" />
              <span className="text-gray-300">Looking for something specific?</span>
            </div>
            <p className="text-sm text-gray-400 text-center">
              Try searching from our homepage or contact us directly for assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#C5A572] rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-[#C5A572] rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-[#C5A572] rounded-full animate-pulse delay-500"></div>
    </div>
  )
}
