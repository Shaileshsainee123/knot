"use client"

import { useState } from "react"
import { Menu, X, CircleUserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useGlobalContext } from "@/context/AuthContext"
import LoginModal from "./LoginModal"


export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathName = usePathname()
  const { openLogin, setOpenLogin } = useGlobalContext()
  const router = useRouter()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }


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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-80 backdrop-blur-xl drop-shadow-[0px_14px_10px_rgba(197,165,114,0.2)]">
        <div className="">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center justify-center mr-3">
                <Link href="/">
                  <Image
                    src="/Knot_Logo.png"
                    alt="Knot Delhi Logo"
                    width={150}
                    height={50}
                    className="h-[50px] w-[150px] object-contain"
                  />
                </Link>

              </div>

            </div>

            <div className="hidden md:flex space-x-8">
              {/* Navigation links */}
              {menuItems.map((item) => (
                <Link key={item.id} href={item.href} className={`nav-link text-white hover:text-[#C5A572] relative ${pathName === item.href ? "active" : ""}`}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => handleScroll("booking")}
                className="bg-transparent border-primary text-primary hover:bg-[#C5A572] hover:text-black transition-colors duration-300 ease-in-out"
              >
                Guest List
              </Button>
              <Button className="font-semibold" onClick={() => handleScroll("booking")} >Book Table</Button>
              {/* <CircleUserRound className="text-primary cursor-pointer hover:scale-110 transition duration-300" size={40} onClick={() => setOpenLogin(true)} /> */}

            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-white border border-primary hover:text-[#C5A572]">
                {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#222236] mt-4 pb-4 border-t border-gray-800 h-screen">
              <div className="flex flex-col items-center space-y-8 mt-8">
                {menuItems.map((item) => (
                  <Link key={item.id} onClick={toggleMobileMenu} href={item.href} className={`nav-link text-white hover:text-[#C5A572] relative ${pathName === item.href ? "active" : ""}`}>
                    {item.name}
                  </Link>
                ))}

                <div className="flex space-x-4 pt-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      toggleMobileMenu()
                      handleScroll("booking")
                    }}
                    className="bg-transparent border-primary text-primary hover:bg-[#C5A572] hover:text-black"
                  >
                    Add Guest List
                  </Button>
                  <Button className="bg-primary text-black hover:bg-[#C5A572]/80"
                    onClick={() => {
                      toggleMobileMenu()
                      handleScroll("booking")
                    }}
                  >Reserve a VIP Table</Button>
                </div>


              </div>
              {/* <div className="flex bg-secondary items-center justify-center gap-3  mt-20 px-6 py-4">
                <CircleUserRound className="text-primary" size={45} />
                <p className="text-black" onClick={() => {
                  toggleMobileMenu()
                  setOpenLogin(true)
                }}>Login/Sign-up</p>
              </div> */}
            </div>
          )}
        </div>
      </nav>
      <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  )
}

const menuItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Events",
    href: "/events",
  },
  {
    id: 3,
    name: "Gallery",
    href: "/gallery",
  },
  {
    id: 4,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
  }
]