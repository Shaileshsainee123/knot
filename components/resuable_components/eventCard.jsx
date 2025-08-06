import React from 'react'
import { Clock } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
const eventCard = ({ event }) => {
    const router = useRouter();

    const handleScroll = (targetId) => {
        if (window.location.pathname === "/") {
            const section = document.getElementById(targetId);
            if (section) {
                const offset = 80;
                const top = section.offsetTop - offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
        } else {
            router.push(`/#${targetId}`); // navigate to home with hash
        }
    };
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
                    {new Date(event.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                    })}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{event.theme_Name}</h3>
                <p className="text-muted mb-4">{event.description}</p>
                <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    <span className="text-secondary">{`${event?.startTime} - ${event?.endTime}`}</span>
                </div>

                <Button
                    onClick={() => handleScroll("booking")}
                    className={"w-full bg-transparent border border-primary text-primary font-semibold hover:text-black hover:bg-[#C5A572] transition-all duration-500"}
                >
                    Book Now
                </Button>
            </div>
        </div>
    )
}

export default eventCard