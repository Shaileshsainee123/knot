'use client'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import EventCard from "../../components/resuable_components/eventCard"
import { motion } from "framer-motion"
import Heading from "../../components/resuable_components/Heading"
import { getEventList } from '@/lib/api/eventApi'
import EventCardPlaceholder from '@/components/resuable_components/placeholders/EventCardPlaceholder'

const MotionDiv = motion.div;

const events = [
  {
    id: 1,
    title: "Neon Nights",
    date: "21 Jun",
    time: "10:00 PM - 4:00 AM",
    description: "Experience the ultimate glow party with DJ Akshay and special effects that will light up your night.",
    image: "https://readdy.ai/api/search-image?query=luxurious%20nightclub%20event%20with%20DJ%2C%20colorful%20lights%2C%20crowd%20dancing%2C%20professional%20photography%2C%20high-end%20nightlife%2C%20elegant%20atmosphere%2C%20premium%20champagne%20bottles%2C%20VIP%20section&width=600&height=400&seq=event1&orientation=landscape",
    featured: false,
  },
  {
    id: 2,
    title: "Retro Revival",
    date: "28 Jun",
    time: "9:30 PM - 3:30 AM",
    description: "Step back in time with our 80s & 90s themed night featuring classic hits and vintage vibes.",
    image: "https://readdy.ai/api/search-image?query=luxurious%20retro%20disco%20nightclub%20event%2C%2080s%20theme%2C%20vintage%20outfits%2C%20disco%20ball%2C%20colorful%20lights%2C%20professional%20photography%2C%20high-end%20nightlife%2C%20elegant%20atmosphere&width=600&height=400&seq=event2&orientation=landscape",
    featured: false,
  },
  {
    id: 3,
    title: "International DJ Night",
    date: "5 Jul",
    time: "10:30 PM - 5:00 AM",
    description: "World-renowned DJ Marco Carola brings his unique sound to Knot Delhi for one night only.",
    image: "https://readdy.ai/api/search-image?query=luxurious%20international%20DJ%20performing%20at%20exclusive%20nightclub%2C%20premium%20atmosphere%2C%20crowd%20cheering%2C%20professional%20lighting%2C%20high-end%20sound%20system%2C%20VIP%20booths%2C%20champagne%20service%2C%20professional%20photography&width=600&height=400&seq=event3&orientation=landscape",
    featured: true,
  },
  {
    id: 4,
    title: "International DJ Nightvs",
    date: "10 Jul",
    time: "10:30 PM - 5:00 AM",
    description: "World-renowned DJ Marco Carola brings his unique sound to Knot Delhi for one night only.",
    image: "https://readdy.ai/api/search-image?query=luxurious%20international%20DJ%20performing%20at%20exclusive%20nightclub%2C%20premium%20atmosphere%2C%20crowd%20cheering%2C%20professional%20lighting%2C%20high-end%20sound%20system%2C%20VIP%20booths%2C%20champagne%20service%2C%20professional%20photography&width=600&height=400&seq=event3&orientation=landscape",
    featured: true,
  },
];

const EventsPage = () => {
  const HeadingData = {
    title: "Upcoming Events",
    para: "Join us for our exclusive events featuring world-class DJs, themed nights, and unforgettable experiences.",
  };
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);


  const getEvents = async () => {
    setLoading(true);
    try {
      const response = await getEventList({page: currentPage, limit: limit});

      if (response.data?.result) {
        setEvents(response.data.result);
        setTotalPages(response.data?.totalPages);
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
  }, [currentPage, limit]);



  return (
    <div className='py-20'>
      <section id="events" className="py-14 bg-black">
        <div className="container mx-auto px-4">
          <Heading data={HeadingData} />

         {loading
            ? Array(3).fill(0).map((_, idx) => <EventCardPlaceholder key={idx} />) : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events?.map((event, index) => (
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
          </div>}

         {!loading && events.length >0 &&  <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
              className="border-primary text-primary hover:bg-[#C5A572] hover:text-black px-6 py-2"
            >
              Prev
            </Button>

            <span className="text-white text-lg">{currentPage} / {totalPages}</span>

            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="outline"
              className="border-primary text-primary hover:bg-[#C5A572] hover:text-black px-6 py-2"
            >
              Next
            </Button>
          </div>}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
