
import Navigation from '@/components/navigation';
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/footer';
import { AuthProvider } from '@/context/AuthContext';

export const metadata = {
 title: {
    default: "Knot-Delhi | The Nightclub That Never Unravels",
    template: "%s | Knot-Delhi",
  },
  description: 'In the Knot, the night never unravels. We are watching, waiting, and welcoming you into a world of endless beats and unforgettable moments',
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
        </AuthProvider>
      </body>
    </html>
  );
}

