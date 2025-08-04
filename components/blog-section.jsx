'use client'
import { Button } from "@/components/ui/button"
import { apiJson } from "@/lib/api/axiosBase"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  //=========== function to get the blog posts ==================//
  const getBlogPosts = async () => {
    setLoading(true);
    try {
      const response = await apiJson.get(`api/Website/getBlogList?page=${currentPage}&limit=${limit}`);
      if (response.data?.result) {
        setBlogPosts(response.data.result);
        setTotalPages(response.data?.totalPages);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching blog list:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBlogPosts();
  }, [currentPage, limit]);
  return (
    <div className="pt-12">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg animate-pulse">
                <div className="w-full h-56 bg-gray-800" />
                <div className="p-6">
                  <div className="h-4 bg-gray-700 w-1/3 mb-4 rounded" />
                  <div className="h-6 bg-gray-600 w-2/3 mb-3 rounded" />
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-700 rounded w-full" />
                    <div className="h-4 bg-gray-700 rounded w-5/6" />
                  </div>
                  <div className="h-4 bg-gray-600 w-24 rounded" />
                </div>
              </div>
            ))
          ) : (
            blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={post?.thumbnailImage || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-[#C5A572] mr-2" />
                    <span className="text-gray-400 text-sm">
                      {new Date(post?.createdAt).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                  <div
                    className="text-gray-400 mb-4"
                    dangerouslySetInnerHTML={{
                      __html:
                        post.description.length > 100
                          ? post.description.slice(0, 60) + "..."
                          : post.description,
                    }}
                  />
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#C5A572] hover:text-white transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>


        {!loading && blogPosts?.length > 0 && <div className="flex justify-center items-center gap-4 my-6">
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
    </div>
  )
}
