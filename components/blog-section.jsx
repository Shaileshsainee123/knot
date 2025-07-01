import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Top 10 DJs to Watch in Delhi's Nightlife Scene",
    date: "June 18, 2025",
    excerpt:
      "Discover the most talented DJs currently making waves in Delhi's vibrant nightlife. From techno to hip-hop, these artists are defining the sound of the city.",
    image:
      "https://readdy.ai/api/search-image?query=professional%20DJ%20equipment%2C%20high-end%20turntables%2C%20mixer%2C%20headphones%2C%20atmospheric%20lighting%2C%20professional%20photography%2C%20nightclub%20setting&width=600&height=400&seq=blog1&orientation=landscape",
  },
  {
    id: 2,
    title: "The Art of Mixology: Knot Delhi's Signature Cocktails",
    date: "June 12, 2025",
    excerpt:
      "Go behind the scenes with our head mixologist as he reveals the secrets behind our most popular signature cocktails and their unique ingredients.",
    image:
      "https://readdy.ai/api/search-image?query=elegant%20cocktails%20on%20bar%20counter%2C%20premium%20spirits%2C%20bartender%20tools%2C%20atmospheric%20lighting%2C%20professional%20photography%2C%20high-end%20nightclub%20setting&width=600&height=400&seq=blog2&orientation=landscape",
  },
  {
    id: 3,
    title: "Nightclub Fashion Guide: What to Wear for a Night Out",
    date: "June 5, 2025",
    excerpt:
      "Our style experts share tips on the latest nightlife fashion trends and how to dress to impress for your next visit to Knot Delhi.",
    image:
      "https://readdy.ai/api/search-image?query=elegant%20party%20outfits%2C%20luxury%20fashion%2C%20nightclub%20attire%2C%20professional%20photography%2C%20stylish%20clothing%20for%20nightlife&width=600&height=400&seq=blog3&orientation=landscape",
  },
]

export default function BlogSection() {
  return (
    <div className="pt-12">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-[#C5A572] mr-2" />
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-[#C5A572] hover:text-white transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="bg-transparent border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-black px-8 py-3"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </div>
  )
}
