"use client";
import { Button } from "@/components/ui/button"
import EventCard from "../components/resuable_components/eventCard"
import { motion } from "framer-motion"
import Heading from "./resuable_components/Heading";
import Link from "next/link";
import { useState, useEffect } from "react";
import EventCardPlaceholder from "./resuable_components/placeholders/EventCardPlaceholder";
import { getEventList } from "@/lib/api/eventApi";

const MotionDiv = motion.create('div')
const events = [
  {
    id: 1,
    title: "Neon Nights",
    date: "21 Jun",
    time: "10:00 PM - 4:00 AM",
    description: "Experience the ultimate glow party with DJ Akshay and special effects that will light up your night.",
    image:
      "https://readdy.ai/api/search-image?query=luxurious%20nightclub%20event%20with%20DJ%2C%20colorful%20lights%2C%20crowd%20dancing%2C%20professional%20photography%2C%20high-end%20nightlife%2C%20elegant%20atmosphere%2C%20premium%20champagne%20bottles%2C%20VIP%20section&width=600&height=400&seq=event1&orientation=landscape",
    featured: false,
  },
  {
    id: 2,
    title: "Retro Revival",
    date: "28 Jun",
    time: "9:30 PM - 3:30 AM",
    description: "Step back in time with our 80s & 90s themed night featuring classic hits and vintage vibes.",
    image:
      "https://readdy.ai/api/search-image?query=luxurious%20retro%20disco%20nightclub%20event%2C%2080s%20theme%2C%20vintage%20outfits%2C%20disco%20ball%2C%20colorful%20lights%2C%20professional%20photography%2C%20high-end%20nightlife%2C%20elegant%20atmosphere&width=600&height=400&seq=event2&orientation=landscape",
    featured: false,
  },
  {
    id: 3,
    title: "International DJ Night",
    date: "5 Jul",
    time: "10:30 PM - 5:00 AM",
    description: "World-renowned DJ Marco Carola brings his unique sound to Knot Delhi for one night only.",
    image:
      "https://readdy.ai/api/search-image?query=luxurious%20international%20DJ%20performing%20at%20exclusive%20nightclub%2C%20premium%20atmosphere%2C%20crowd%20cheering%2C%20professional%20lighting%2C%20high-end%20sound%20system%2C%20VIP%20booths%2C%20champagne%20service%2C%20professional%20photography&width=600&height=400&seq=event3&orientation=landscape",
    featured: true,
  },
]

export default function EventsSection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const HeadingData = {
    title: "Upcoming Events",
    para: "Join us for our exclusive events featuring world-class DJs, themed nights, and unforgettable experiences."
  }

  //=========== function to get the events ==================//

  const getEvents = async () => {
    setLoading(true);
    try {
      const response = await getEventList();

      if (response.data?.result) {
        setEvents(response.data.result);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching event list:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section id="events" className="py-14 bg-black">
      <div className="container mx-auto px-4">
        <Heading data={HeadingData} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array(3).fill(0).map((_, idx) => <EventCardPlaceholder key={idx} />) : events?.map((event, index) => (
              <MotionDiv
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <EventCard event={event} />
              </MotionDiv>
            ))}
        </div>

       {!loading && events?.length > 0 && <div className="text-center mt-12">
          <Link href="/events">
            <Button
              variant="outline"
              className="bg-transparent border-primary text-primary hover:bg-[#C5A572] hover:text-black px-8 py-3"
            >
              View All Events
            </Button>
          </Link>
        </div>}
      </div>
    </section>
  )
}
