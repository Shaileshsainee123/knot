
import Navigation from '@/components/navigation';
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/footer';
import { AuthProvider } from '@/context/AuthContext';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '@/components/resuable_components/ScrollToTop';

export const metadata = {
 title: {
    default: "Knot-Delhi | The Nightclub That Never Unravels",
    template: "%s | Knot-Delhi",
  },
  description: 'In the Knot, the night never unravels. We are watching, waiting, and welcoming you into a world of endless beats and unforgettable moments',
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon", rel: "icon" },          
      { url: "/favicon-32x32.png", sizes: "192x192", type: "image/png", rel: "icon" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png", rel: "icon" },
    ],
    shortcut: "/favicon.ico",           
    apple: "/favicon-32x32.png",       
    other: [
      { rel: "apple-touch-icon", url: "/android-chrome-192x192.png" },
      { rel: "mask-icon", url: "/android-chrome-512x512.png", color: "#000000" },
    ],
  },
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} overflow-x-hidden`}
      >
        <AuthProvider>
          <Navigation />
          {children}
          <Footer />
          <ToastContainer />
          <ScrollToTop />
        </AuthProvider>
      </body>
    </html>
  );
}

