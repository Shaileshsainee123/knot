import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Terms & Conditions", href: "/help/terms" },
  { name: "Privacy Policy", href: "/help/privacy" },
]
const SocialLinks = [
  {
    id: 1,
    name: "Instagram",
    href: "https://www.instagram.com/knotdelhi/",
    icon: <Instagram className="w-5 h-5  transition-all duration-500 ease-in-out transform  hover:scale-125 hover:rotate-[360deg]" />,
  },
  {
    id: 2,
    name: "Facebook",
    href: "https://www.facebook.com/knotdelhi/",
    icon: <Facebook className="w-5 h-5 transition-all duration-500 ease-in-out transform  hover:scale-125 hover:rotate-[360deg]" />,
  },
  {
    id: 3,
    name: "Twitter",
    href: "https://twitter.com/knotdelhi/",
    icon: <Twitter className="w-5 h-5 transition-all duration-500 ease-in-out transform  hover:scale-125 hover:rotate-[360deg]" />,
  },
  {
    id: 4,
    name: "Youtube",
    href: "https://www.youtube.com/@knotdelhi",
    icon: <Youtube className="w-5 h-5 transition-all duration-500 ease-in-out transform  hover:scale-125 hover:rotate-[360deg]" />,
  },


]

const openingHours = [
  { days: "Monday - Thursday:", hours: "8:00 PM - 2:00 AM" },
  { days: "Friday - Saturday:", hours: "8:00 PM - 4:00 AM" },
  { days: "Sunday:", hours: "8:00 PM - 1:00 AM" },
]

export default function Footer() {
  return (
    <footer className="drop-shadow-[0_-8px_36px_#FFFFFF40] ">
      <div className="px-4 bg-[linear-gradient(#0D0B09,#443A29)] pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-7xl m-auto">
          <div>
            <div className="flex items-center justify-center md:justify-start mb-6">
              <Link href="/">
                <Image
                  src="/Knot_Logo.png"
                  alt="Knot Delhi Logo"
                  width={180}
                  height={100}
                  className="h-[100px] w-[200px] object-contain"
                />
              </Link>
            </div>
            <p className="text-muted mb-6">
              Delhi's premier nightlife destination where luxury meets rhythm. Experience unforgettable nights in the
              heart of the city.
            </p>
            <div className="flex space-x-4">
              {SocialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-[#C5A572] hover:text-black transition-all duration-300"
                >
                  {link.icon}
                </Link>
              ))}

            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted hover:text-[#C5A572] transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-muted">Gate No-3, EROS HOTEL, Nehru Place, New Delhi, Delhi 110019</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-3" />
                <span className="text-muted"><a href="tel:+918800015162">+91 8800015162</a></span>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <span className="text-muted"><a href="mailto:info@knotdelhi.com">info@knotdelhi.com</a></span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              {openingHours.map((schedule, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-muted">{schedule.days}</span>
                  <span className="text-white">{schedule.hours}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>


      </div>
      <div className="border-t border-gray-800 bg-primary py-5 px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl m-auto">
          <p className="text-white mb-4 md:mb-0">© 2025 Knot Delhi. All rights reserved.</p>
          <p className="text-white">
            Designed by <span className="text-white text-sm">Akash Babu</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
