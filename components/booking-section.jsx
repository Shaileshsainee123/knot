"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"
import Heading from "./resuable_components/Heading"

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const MotionDiv = motion.create('div')



export default function BookingSection() {
  const [activeTab, setActiveTab] = useState("guestList")
  const [guestListForm, setGuestListForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    terms: false,
  })

  const [tableForm, setTableForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    package: "",
    request: "",
    terms: false,
  })

  const handleGuestListSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for joining our guest list! We will confirm your reservation shortly.")
    setGuestListForm({
      name: "",
      email: "",
      phone: "",
      event: "",
      guests: "",
      terms: false,
    })
  }

  const handleTableSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your table reservation! Our team will contact you to confirm the details.")
    setTableForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      package: "",
      request: "",
      terms: false,
    })
  }
const HeadingData ={
  title:"Book Your Experience",
  para:" Choose between joining our guest list or reserving a VIP table for your next visit to Knot Delhi."
}
  return (
    <section id="booking" className="pt-14 bg-black ">
      <div className="container mx-auto px-4">
       <Heading data={HeadingData}/>

        {/* Tab list */}

        <div className="flex gap-1 md:gap-3 items-center justify-evenly border border-primary max-w-sm mx-auto p-1 rounded-md mb-10 relative bg-transparent">
          {["guestList", "table"].map((tab) => (
            <div
              key={tab}
              className="relative z-10 cursor-pointer font-medium px-4 py-3"
              onClick={() => setActiveTab(tab)}
            >
              {activeTab === tab && (
                <MotionDiv
                  layoutId="tabBackground"
                  className="absolute inset-0 bg-primary rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className={activeTab === tab ? "relative text-black" : "text-primary relative"}>
                {tab === "guestList" ? "Add Guest List" : "Reserve a VIP Table"}
              </span>
            </div>
          ))}
        </div>

      </div>
      <div className="bg-[url('/bookingBg.png')] bg-cover bg-no-repeat bg-center p-5 py-10 md:p-10 " >
        <AnimatePresence mode="wait"></AnimatePresence>
        {/* Guest List Form */}
        {activeTab === "guestList" &&
          (<MotionDiv
            key="guestList"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl bg-[#2A2A2AF2] rounded-lg p-8 drop-shadow-[18_8px_17px_#22222240]"
          >
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Join Guest List</h3>
            <form onSubmit={handleGuestListSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-secondary">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={guestListForm.name}
                  onChange={(e) => setGuestListForm({ ...guestListForm, name: e.target.value })}
                  placeholder="Your name"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-secondary">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={guestListForm.email}
                  onChange={(e) => setGuestListForm({ ...guestListForm, email: e.target.value })}
                  placeholder="Your email"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
              </div>

              <div>
                <Label htmlFor="contact" className="text-secondary">
                <span className="flex gap-1">  Phone Number  <Image src='/whatsapp_ic.png' alt="Whatsapp_logo" width={16} height={16}/> <span>(Whatsapp)</span></span>
                </Label>
                <Input
                  id="contact"
                  type="tel"
                  value={guestListForm.phone}
                  onChange={(e) => setGuestListForm({ ...guestListForm, phone: e.target.value })}
                  placeholder="Your phone"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
              </div>

              <div>
                <Label htmlFor="guests" className="text-secondary">
                  Number of Guests
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={guestListForm.guests}
                  onChange={(e) => setGuestListForm({ ...guestListForm, guests: e.target.value })}
                  placeholder="Number of guests"
                  className="bg-[#1E1E1E] appearance-none text-white placeholder:text-white"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  className="mb-3"
                  id="gl-terms"
                  checked={guestListForm.terms}
                  onCheckedChange={(checked) => setGuestListForm({ ...guestListForm, terms: checked })}
                />
                <Label htmlFor="gl-terms" className="text-secondary">
                  I agree to the terms and conditions
                </Label>
              </div>

              <Button type="submit" className="w-full bg-primary font-bold text-black hover:bg-[#C5A572]/80 py-3">
               Add Guest List
              </Button>
            </form>
          </MotionDiv>)
        }

        {/* Table Booking Form */}
        {activeTab === "table" &&
          <MotionDiv
            key="table"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-[#2A2A2AF2] rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Reserve a Table</h3>
            <form onSubmit={handleTableSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-secondary">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={tableForm.name}
                  onChange={(e) => setTableForm({ ...tableForm, name: e.target.value })}
                  placeholder="Your name"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-secondary">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={tableForm.email}
                  onChange={(e) => setTableForm({ ...tableForm, email: e.target.value })}
                  placeholder="Your email"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-secondary">
                  <span className="flex gap-1">  Phone Number  <Image src='/whatsapp_ic.png' alt="Whatsapp_logo" width={16} height={16}/> <span>(Whatsapp)</span></span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={tableForm.phone}
                  onChange={(e) => setTableForm({ ...tableForm, phone: e.target.value })}
                  placeholder="Your phone"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date" className="text-secondary">
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={tableForm.date}
                    onChange={(e) => setTableForm({ ...tableForm, date: e.target.value })}
                    className="bg-[#1E1E1E] text-white placeholder:text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="time" className="text-secondary">
                    Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={tableForm.time}
                    onChange={(e) => setTableForm({ ...tableForm, time: e.target.value })}
                    className="bg-[#1E1E1E] text-white placeholder:text-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="guests" className="text-secondary">
                  Number of Guests
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="20"
                  value={tableForm.guests}
                  onChange={(e) => setTableForm({ ...tableForm, guests: e.target.value })}
                  placeholder="Number of guests"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
              </div>

              {/* <div>
                <Label htmlFor="package" className="text-secondary">
                  Select Package
                </Label>
                <Select
                  value={tableForm.package}
                  onValueChange={(value) => setTableForm({ ...tableForm, package: value })}
                >
                  <SelectTrigger className="bg-[#1E1E1E] text-white placeholder:text-white">
                    <SelectValue placeholder="Choose a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="silver">Silver - ₹10,000 (Min. Spend)</SelectItem>
                    <SelectItem value="gold">Gold - ₹25,000 (Min. Spend)</SelectItem>
                    <SelectItem value="platinum">Platinum - ₹50,000 (Min. Spend)</SelectItem>
                    <SelectItem value="diamond">Diamond - ₹100,000 (Min. Spend)</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}

              <div>
                <Label htmlFor="request" className="text-secondary">
                  Special Requests
                </Label>
                <Textarea
                  id="request"
                  value={tableForm.request}
                  onChange={(e) => setTableForm({ ...tableForm, request: e.target.value })}
                  placeholder="Any special requests?"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  className="mb-3"
                  checked={tableForm.terms}
                  onCheckedChange={(checked) => setTableForm({ ...tableForm, terms: checked })}
                />
                <Label htmlFor="terms" className="text-secondary">
                  I agree to the terms and conditions
                </Label>
              </div>

              <Button type="submit" className="w-full bg-primary text-black hover:bg-[#C5A572]/80 py-3 font-semibold">
                Reserve Table
              </Button>
            </form>
          </MotionDiv>}
      </div>
    </section>
  )
}
