"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PiWhatsappLogoBold } from "react-icons/pi";
import Heading from "./resuable_components/Heading";

export default function NewsletterSection() {
  const [contact, setContact] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for subscribing to our newsletter!")
    setContact("")
  }
  const HeadingData = {
    title: "Stay Connected",
    para: "Subscribe to our newsletter for exclusive updates, special offers, and VIP invitations to our events."
  }

  return (
    <section
      className="py-20 bg-black relative"
      style={{
        backgroundImage: `url('./newsletter.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Heading data={HeadingData} />

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your whatsapp number"
              className="flex-grow  border-[#C5A572]/30 text-white"
              required
            />
            <Button type="submit" className="bg-primary font-bold text-black hover:bg-[#C5A572]/80 px-6 py-3 ">
              <PiWhatsappLogoBold className="font-bold" /> Join on WhatsApp
            </Button>
          </form>

          <p className="text-muted mt-4 text-sm">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Knot Delhi.
          </p>
        </div>
      </div>
    </section>
  )
}
