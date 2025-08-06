"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PiWhatsappLogoBold } from "react-icons/pi";
import Heading from "./resuable_components/Heading";
import { toast } from "react-toastify";
import { apiJson } from "@/lib/api/axiosBase";

export default function NewsletterSection() {
  const [contact, setContact] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!contact || !name) {
      toast.error("Please fill in all fields.")
      return
    }
    if (!/^[6-9]\d{9}$/.test(contact)) {
      toast.error("Please enter a valid WhatsApp number.")
      return;
    }

    // Here you would typically send the data to your backend or an API
    try {
      const data = {
        fullName: name,
        number: contact
      }
      const res = await apiJson.post("api/Website/userSubscribe", data)
      toast.success("Thank you for subscribing to our newsletter!")
      setName("")
      setContact("")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("There was an error submitting your form. Please try again later.")
      return

    }
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
        <div className="max-w-3xl mx-auto text-center">
          <Heading data={HeadingData} />

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="flex-grow  border-[#C5A572]/30 text-white"
            />

            <Input
              type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your whatsapp number"
              className="flex-grow  border-[#C5A572]/30 text-white"
            />
            <Button type="submit" className="bg-primary font-bold text-black hover:bg-[#C5A572]/90 px-6 py-3 ">
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
