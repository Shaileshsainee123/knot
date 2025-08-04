"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import Heading from "@/components/resuable_components/Heading"
import Link from "next/link"
import { useFormik } from "formik"
import * as Yup from "yup"
import { apiJson } from "@/lib/api/axiosBase"
import { toast } from "react-toastify"

const MotionDiv = motion.create('div')
const SocialLinks = [
    {
        id: 1,
        name: "Instagram",
        href: "https://www.instagram.com/knotdelhi/",
        icon: <Instagram className="w-5 h-5" />,
    },
    {
        id: 2,
        name: "Facebook",
        href: "https://www.facebook.com/knotdelhi/",
        icon: <Facebook className="w-5 h-5" />,
    },
    {
        id: 3,
        name: "Twitter",
        href: "https://twitter.com/knotdelhi/",
        icon: <Twitter className="w-5 h-5" />,
    },
    {
        id: 4,
        name: "Youtube",
        href: "https://www.youtube.com/@knotdelhi",
        icon: <Youtube className="w-5 h-5" />,
    },


]

export default function ContactSection() {
    const headingData = {
        title: "Contact Us",
        para: "Have questions o    r need more information? Reach out to us and our team will get back to you."
    }
    const [loading, setLoading] = useState(false);
    //============= Validation for contact form =============//
    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string().required("Message is required"),
    });


    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                setLoading(true);
                const response = await apiJson.post("/api/Website/contactUs", values);
                toast.success(response?.data?.message || "Message sent successfully!");

                resetForm();
            } catch (error) {
                console.error("Error submitting form:", error);
                toast.error("There was an error submitting your message. Please try again later.");
            } finally {
                setLoading(false);
            }
        },
    });


    return (
        <section id="contact" className="py-20 bg-gradient-secondary">
            <div className="container mx-auto px-4 pt-16">
                <Heading data={headingData} />

                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="lg:w-1/2 hover:shadow-[0_10px_20px_rgba(197,165,114,0.2)] transition-all duration-300 ease-in">
                        <MotionDiv
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-gradient-dark rounded-lg p-8 h-full"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                            <form onSubmit={formik.handleSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="contact-name" className="text-gray-300">
                                        Full Name
                                    </Label>
                                    <Input
                                        id="contact-name"
                                        type="text"
                                        name="fullName"
                                        value={formik.values.fullName}
                                        onChange={formik.handleChange}
                                        placeholder="Your name"
                                        className="bg-gray-800/80 border-[#C5A572]/30 text-white"
                                    />
                                    {formik.touched.fullName && formik.errors.fullName ? (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <Label htmlFor="contact-email" className="text-gray-300">
                                        Email Address
                                    </Label>
                                    <Input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        placeholder="Your email"
                                        className="bg-gray-800/80 border-[#C5A572]/30 text-white"
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <Label htmlFor="contact-subject" className="text-gray-300">
                                        Subject
                                    </Label>
                                    <Input
                                        id="contact-subject"
                                        name="subject"
                                        type="text"
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        placeholder="Subject"
                                        className="bg-gray-800/80 border-[#C5A572]/30 text-white"
                                    />
                                    {formik.touched.subject && formik.errors.subject ? (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <Label htmlFor="contact-message" className="text-gray-300">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="contact-message"
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        placeholder="Your message"
                                        className="bg-gray-800/80  text-white"
                                        rows={5}
                                    />
                                    {formik.touched.message && formik.errors.message ? (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                                    ) : null}
                                </div>

                                <Button type="submit" disabled={loading} className="bg-[#C5A572] text-black hover:bg-[#C5A572]/80 px-6 py-3">
                                    {loading ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </MotionDiv>
                    </div>

                    <div className="lg:w-1/2 hover:shadow-[0_10px_20px_rgba(197,165,114,0.2)] transition-all duration-300 ease-in">
                        <MotionDiv
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-gradient-dark rounded-lg p-8 h-full"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white">Club Information</h3>

                            <div className="mb-8">
                                <h4 className="text-lg font-semibold mb-3 text-[#C5A572]">Location</h4>
                                <div className="flex items-start mb-4">
                                    <MapPin className="w-6 h-6 text-[#C5A572] mr-3 mt-1 flex-shrink-0" />
                                    <p className="text-gray-300">123 Connaught Place, New Delhi, 110001, India</p>
                                </div>

                                <div className="h-64 rounded overflow-hidden mb-4">

                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6380545144316!2d77.2476782238331!3d28.550596987799697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf3e07cf57%3A0x70eea3eb139b4bbd!2sEROS%20HOTEL%2C%20Nehru%20Place%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1750850682653!5m2!1sen!2sin" width="1280" height="720" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>


                            <div>
                                <h4 className="text-lg font-semibold mb-3 text-[#C5A572]">Contact Details</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Phone className="w-6 h-6 text-[#C5A572] mr-3" />
                                        <p className="text-gray-300">+91 98765 43210</p>
                                    </div>

                                    <div className="flex items-center">
                                        <Mail className="w-6 h-6 text-[#C5A572] mr-3" />
                                        <p className="text-gray-300">info@knotdelhi.com</p>
                                    </div>

                                    <div className="flex space-x-4 mt-6">
                                        {SocialLinks.map((link) => (
                                            <Link
                                                key={link.id}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full border border-[#C5A572] flex items-center justify-center text-[#C5A572] hover:bg-[#C5A572] hover:text-black transition-all duration-300"
                                            >
                                                {link.icon}
                                            </Link>))}

                                    </div>
                                </div>
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </div>
        </section>
    )
}
