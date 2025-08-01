import React from 'react'
import { Clock } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
const eventCard = ({ event }) => {
    return (
        <div
            className="bg-gradient-dark h-[510px] rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(197,165,114,0.2)] transition-all duration-300 ease-in"
        >
            <div className="relative">
                <Image
                    src={event?.theme_Image || "/placeholder.svg"}
                    alt={event?.theme_Name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-black font-semibold px-3 py-1 rounded">
                    {event.date}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{event.theme_Name}</h3>
                <p className="text-muted mb-4">{event.description}</p>
                <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    <span className="text-secondary">{`${event?.startTime} - ${event?.endTime}`}</span>
                </div>
                <Link href={'#booking'}>
                <Button
                    className={"w-full bg-transparent border border-primary text-primary hover:bg-[#C5A572] hover:text-black transition-all duration-500"}
                >
                    Book Now
                </Button>
                </Link>
            </div>
        </div>
    )
}

export default eventCard