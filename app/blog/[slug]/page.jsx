
import Image from 'next/image';
import React from 'react'
import { Calendar } from "lucide-react"
const page = () => {
const post = {
  id: "a34f2b7c-fc1a-4f05-902f-50c3d7594aa9",
  thumbnailImage:
    "https://res.cloudinary.com/de2ilqmka/image/upload/v1753783593/user-profile-pics/xoqrxamnpnuznyuep0rw.jpg",
  featuredImage:
    "https://res.cloudinary.com/de2ilqmka/image/upload/v1753783594/user-profile-pics/bbanuskzqgaia8mcgtuy.jpg",
  title: "The Landscape Of Indian Media And Entertainment Is Changing",
  description:
    "<h1>Digital Media Ascendancy</h1><p>Digital media has emerged as the largest segment, contributing 32% to the overall M&amp;E revenues.It experienced a 17% growth, reaching INR 802 billion, surpassing traditional television for the first time .</p><h1>Advertising vs. Subscription Revenues</h1><p>While advertising revenues saw an 8.1% increase, driven by digital platforms and premium Out-of-Home (OOH) media, subscription revenues declined by 2% across TV, print, film, and online gaming segments .</p>",
  status: "Published",
  metaTitle: "This is testing",
  metaDescription:
    "While advertising revenues saw an 8.1% increase, driven by digital platforms and premium Out-of-Home (OOH) media, subscription revenues declined by 2% across TV, print, film, and online gaming segments .",
  metaKeywords: "nightlife, event planning, venue management",
  slug: "the-landscape-of-indian-media-and-entertainment-is-changing",
  createdAt: "2025-07-29T10:06:35.168Z",
  updatedAt: "2025-07-29T10:06:35.168Z",
};
    return (
        <div className='py-20'>
            <section id="events" className="pt-14 bg-black">
                <div className="max-w-5xl mx-auto px-4">
                    {/* Featured Image */}
                    <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
                        <Image
                            src={post?.featuredImage || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>

                    {/* Post Meta */}
                    <div className="text-gray-400 flex items-center text-sm mb-4">
                        <Calendar className="w-5 h-5 text-[#C5A572] mr-2" />
                        <span>
                            {new Date(post?.createdAt).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-white mb-6">{post.title}</h1>

                    {/* Description */}
                    <div
                        className="text-gray-400 leading-7 prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.description }}
                    />

                </div>
            </section>
        </div>
    )
}

export default page