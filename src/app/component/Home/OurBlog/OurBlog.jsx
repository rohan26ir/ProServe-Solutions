import Link from "next/link";
import React from "react";
import { SiSpeedypage } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FaComments, FaLongArrowAltRight } from "react-icons/fa";

const OurBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Digital Transformation in Business",
      description:
        "Explore how AI, automation, and cloud computing are reshaping businesses for a smarter future.",
      date: "20 May",
      Comment: 15,
      image:
        "https://unicktheme.com/php-template/zeena/assets/images/blog/blog-details-img-1.jpg",
      link: "/blogs/future-digital-transformation",
    },
    {
      id: 2,
      title: "Why Your Business Needs a Custom Software Solution",
      description:
        "Discover how custom software improves efficiency, streamlines operations, and gives your business a competitive edge.",
      date: "28 March",
      Comment: 20,
      image:
        "https://unicktheme.com/php-template/zeena/assets/images/blog/blog-lp-2.jpg",
      link: "/blogs/custom-software-benefits",
    },
    {
      id: 3,
      title: "Top Cybersecurity Trends to Watch in 2025",
      description:
        "Stay ahead of cyber threats with AI-powered defense systems and zero-trust security architecture.",
      date: "18 April",
      Comment: 30,
      image:
        "https://unicktheme.com/php-template/zeena/assets/images/blog/blog-details-img-2.jpg",
      link: "/blogs/cybersecurity-trends-2025",
    },
  ];

  return (
    <div className="px-5">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#EA1B29] flex items-center gap-1 text-2xl font-bold">
          <SiSpeedypage />
          Our Blog
        </p>
        <h2 className="text-3xl font-bold text-black">Latest Articles & Blogs</h2>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white text-black rounded-lg overflow-hidden shadow-2xl flex flex-col h-full">
            {/* Blog Image */}
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />

            {/* Blog Details */}
            <div className="flex justify-between items-center px-2 py-3">
              <div className="flex items-center gap-1">
                <p className="text-[#EA1B29]">
                  <CgProfile />
                </p>
                <p className="text-gray-500">Admin</p>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-[#EA1B29]">
                  <FaComments />
                </p>
                <p className="text-gray-500">{blog.Comment} Comments</p>
              </div>

              <div className="relative -top-7 bg-[#EA1B29] text-white rounded-lg flex items-center justify-center h-10 w-20 text-sm font-semibold">
                {blog.date}
              </div>
            </div>

            {/* Blog Content & Read More */}
            <div className="px-5 pb-5 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-xl font-bold">{blog.title}</h3>
                <p className="text-gray-600">{blog.description}</p>
              </div>

              <Link href={blog.link} className="mt-3">
                <div className="flex justify-between items-center border-t-2 border-gray-400 pt-2  text-gray-400 hover:text-[#EA1B29]  ">
                  <p className="  font-semibold">Read More</p>
                  <FaLongArrowAltRight className="" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
