'use client'
import Loader from '@/components/Loader'
import Heading from '@/components/resuable_components/Heading'
import React, { Suspense } from 'react'
const BlogComponent = React.lazy(() => import("@/components/blog-section"))

const BlogPage = () => {

    const HeadingData = {
        title: "Latest From Our Blog",
        para: "Stay updated with the latest trends, events, and happenings in the nightlife scene."
    }
    return (
        <>
            <Suspense fallback={<Loader />}>
                <section id="blog" className="py-20 bg-gradient-secondary">
                    <div className="container mx-auto px-4 pt-14">
                        <Heading data={HeadingData} />
                        <BlogComponent /> 
                    </div>
                </section>
            </Suspense>
        </>
    )
}

export default BlogPage