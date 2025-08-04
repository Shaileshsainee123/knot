'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, ChevronRight } from 'lucide-react';
import { apiJson } from '@/lib/api/axiosBase';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await apiJson.get(`/api/Website/getOneBlog/${slug}`);

        setPost(res?.data?.result);
      } catch (err) {
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);


  return (
    <div className="py-20">
      <header className="bg-gradient-secondary container text-white py-8 px-4 ">
         <div className="max-w-5xl mx-auto px-4 flex items-center">
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <ChevronRight className="mx-2 text-xs" />
        <span>{slug?.length>50 ? slug.substring(0, 50) + '...' : slug}</span>
        </div>
      </header>

      <section id="events" className="pt-14 bg-black min-h-[50vh]">
        <div className="max-w-5xl mx-auto px-4">
          {loading ? (
            <div>
              {/* Skeleton Placeholder */}
              <div className="w-full h-[400px] bg-gray-800 animate-pulse rounded-lg mb-8"></div>
              <div className="h-4 w-1/3 bg-gray-800 animate-pulse mb-2 rounded"></div>
              <div className="h-6 w-2/3 bg-gray-700 animate-pulse mb-6 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-800 animate-pulse rounded w-full"></div>
                <div className="h-4 bg-gray-800 animate-pulse rounded w-5/6"></div>
                <div className="h-4 bg-gray-800 animate-pulse rounded w-2/3"></div>
              </div>
            </div>
          ) : post ? (
            <>
              {/* Featured Image */}
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={post?.featuredImage || '/placeholder.svg'}
                  alt={post.title}
                  fill
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Post Meta */}
              <div className="text-gray-400 flex items-center text-sm mb-4">
                <Calendar className="w-5 h-5 text-[#C5A572] mr-2" />
                <span>
                  {new Date(post?.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-white mb-6">{post.title}</h1>

              {/* Description */}
              <div
                className="text-gray-400 leading-7 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.description }}
              />
            </>
          ) : (
            <p className="text-white text-center">No blog post found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
