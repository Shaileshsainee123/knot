"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"
import Heading from "./resuable_components/Heading"
import { useFormik } from "formik"
import * as Yup from "yup"
import { apiJson } from "@/lib/api/axiosBase"
import { toast } from "react-toastify"

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const MotionDiv = motion.create('div')


export default function BookingSection() {
  const HeadingData = {
    title: "Book Your Experience",
    para: " Choose between joining our guest list or reserving a VIP table for your next visit to Knot Delhi."
  }
  const [activeTab, setActiveTab] = useState("guestList")
  const [loading, setLoading] = useState(false)

  //============= Validation for Guest List ==============\\
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid phone number")
      .required("Phone is required"),
    no_of_Guests: Yup.number()
      .typeError("Guests must be a number")
      .min(1, "At least 1 guest required")
      .required("Guests field is required"),
    terms: Yup.boolean().oneOf([true], "You must accept the terms"),
  });

  //============= Validation for Table ==============\\
  const tableValidationSchema = Yup.object({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid phone number")
      .required("Phone is required"),
    Date: Yup.date().required("Date is required"),
    Time: Yup.string().required("Time is required"),
    no_of_Guests: Yup.number()
      .typeError("Guests must be a number")
      .min(1, "At least 1 guest required")
      .required("Guests field is required"),
    request: Yup.string().required("Request is required"),
    terms: Yup.boolean().oneOf([true], "You must accept the terms"),
  })
  //============= Formik for Guest List ==============\\
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      no_of_Guests: 1,
      terms: false,
    },
    validationSchema,
    onSubmit: async(values,{resetForm}) => {
     try {
        setLoading(true);
        const { data } = await apiJson.post('/api/Website/joinGuest', values);
        setLoading(false);
       toast.success(data?.message || "Guest List submitted successfully");
        resetForm(); 
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
        console.error('Error:', error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
      
    }
  });

  const tableFormik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      Date: "",
      Time: "",
      no_of_Guests: 1,
      request: "",
      terms: false,
    },
    validationSchema: tableValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const { data } = await apiJson.post('/api/Website/bookTable', values);
        setLoading(false);
        toast.success(data?.message || "Table Booked successfully");
        resetForm(); 
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
        console.error('Error:', error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    },

  })

  return (
    <section className="pt-14 bg-black ">
      <div id="booking" className="container mx-auto px-4">
        <Heading data={HeadingData} />

        {/* Tab list */}

        <div className="flex gap-1 md:gap-3 items-center justify-evenly border border-primary max-w-[365px] mx-auto p-1 rounded-md mb-10 relative bg-transparent">
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
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-secondary">
                  Full Name
                </Label>
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  placeholder="Your name"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
                {formik.errors.fullName && formik.touched.fullName && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-secondary">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  placeholder="Your email"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="contact" className="text-secondary">
                  <span className="flex gap-1">  Phone Number  <Image src='/whatsapp_ic.png' alt="Whatsapp_logo" width={16} height={16} /> <span>(Whatsapp)</span></span>
                </Label>
                <Input
                  id="contact"
                  type="tel"
                  name="phone"
                  value={formik.values?.phone}
                  onChange={formik.handleChange}
                  placeholder="Your phone"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="no_of_Guests" className="text-secondary">
                  Number of Guests
                </Label>
                <Input
                  id="no_of_Guests"
                  name="no_of_Guests"
                  type="number"
                  value={formik.values?.no_of_Guests}
                  onChange={formik.handleChange}
                  placeholder="Number of guests"
                  className="bg-[#1E1E1E] appearance-none text-white placeholder:text-white"
                />
                {formik.errors.no_of_Guests && formik.touched.no_of_Guests && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.no_of_Guests}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  className="mb-3"
                  id="gl-terms"
                  checked={formik.values.terms}
                  onCheckedChange={() => formik.setFieldValue("terms", !formik.values.terms)}
                />
                <Label htmlFor="gl-terms" className="text-secondary">
                  I agree to the terms and conditions
                </Label>


              </div>

              <Button disabled={!formik.values.terms || loading} type="submit" className="w-full font-bold py-3">
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
            <form onSubmit={tableFormik.handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-secondary">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={tableFormik.values.fullName}
                  onChange={tableFormik.handleChange}
                  placeholder="Your full name"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
                {tableFormik.errors.fullName && tableFormik.touched.fullName && (
                  <p className="text-red-500 text-sm mt-1">{tableFormik.errors.fullName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-secondary">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={tableFormik.values.email}
                  onChange={tableFormik.handleChange}
                  placeholder="Your email"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
                {tableFormik.errors.email && tableFormik.touched.email && (
                  <p className="text-red-500 text-sm mt-1">{tableFormik.errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-secondary">
                  <span className="flex gap-1">  Phone Number  <Image src='/whatsapp_ic.png' alt="Whatsapp_logo" width={16} height={16} /> <span>(Whatsapp)</span></span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={tableFormik.values.phone}
                  onChange={tableFormik.handleChange}
                  placeholder="Your phone"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
                {tableFormik.errors.phone && tableFormik.touched.phone && (
                  <p className="text-red-500 text-sm mt-1">{tableFormik.errors.phone}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date" className="text-secondary">
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    name="Date"
                    value={tableFormik.values.Date}
                    onChange={tableFormik.handleChange}
                    className="bg-[#1E1E1E] text-white placeholder:text-white"
                  />
                  {tableFormik.errors.Date && tableFormik.touched.Date && (
                    <p className="text-red-500 text-sm mt-1">{tableFormik.errors.Date}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="time" className="text-secondary">
                    Time
                  </Label>
                  <Input
                    id="time"
                    name="Time"
                    type="time"
                    value={tableFormik.values.Time}
                    onChange={tableFormik.handleChange}
                    className="bg-[#1E1E1E] text-white placeholder:text-white"
                  />
                  {tableFormik.errors.Time && tableFormik.touched.Time && (
                    <p className="text-red-500 text-sm mt-1">{tableFormik.errors.Time}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="no_of_Guests" className="text-secondary">
                  Number of Guests
                </Label>
                <Input
                  id="no_of_Guests"
                  type="number"
                  name="no_of_Guests"
                  value={tableFormik.values.no_of_Guests}
                  onChange={tableFormik.handleChange}
                  placeholder="Number of guests"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                />
                {tableFormik.errors.no_of_Guests && tableFormik.touched.no_of_Guests && (
                  <p className="text-red-500 text-sm mt-1">{tableFormik.errors.no_of_Guests}</p>
                )}
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
                  name="request"
                  value={tableFormik.values.request}
                  onChange={tableFormik.handleChange}
                  placeholder="Any special requests?"
                  className="bg-[#1E1E1E] text-white placeholder:text-white"
                  rows={3}
                />
                {tableFormik.errors.request && tableFormik.touched.request && (
                  <p className="text-red-500 text-sm mt-1">{tableFormik.errors.request}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  className="mb-3"
                  checked={tableFormik.values.terms}
                  onCheckedChange={() => tableFormik.setFieldValue("terms", !tableFormik.values.terms)}
                />
                <Label htmlFor="terms" className="text-secondary">
                  I agree to the terms and conditions
                </Label>
              </div>

              <Button disabled={!tableFormik.values.terms} type="submit" className="w-full font-bold py-3">
                Reserve Table
              </Button>
            </form>
          </MotionDiv>}
      </div>
    </section>
  )
}
