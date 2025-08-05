'use client'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import EventCard from "../../components/resuable_components/eventCard"
import { motion } from "framer-motion"
import Heading from "../../components/resuable_components/Heading"
import { getEventList } from '@/lib/api/eventApi'
import EventCardPlaceholder from '@/components/resuable_components/placeholders/EventCardPlaceholder'

const MotionDiv = motion.div;


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
      const response = await getEventList({ page: currentPage, limit: limit });

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array(3).fill(0).map((_, idx) => <EventCardPlaceholder key={idx} />) : (
                events?.map((event, index) => (
                  <MotionDiv
                    key={event.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <EventCard event={event} />
                  </MotionDiv>
                ))
              )}
          </div>
          {!loading && events.length > 0 && <div className="flex justify-center items-center gap-4 mt-12">
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
