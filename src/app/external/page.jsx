import Link from 'next/link';
import React from 'react';

const page = () => {

  const items = [
    {
      id: "item_001",
      title: "Web Development",
      description: "Custom-built websites with modern UI/UX, optimized for performance.",
      image: "https://example.com/images/web-development.jpg",
      link: "/services/web-development"
    },
    {
      id: "item_002",
      title: "SEO Optimization",
      description: "Boost your website's visibility on search engines with our SEO services.",
      image: "https://example.com/images/seo-optimization.jpg",
      link: "/services/seo-optimization"
    },
    {
      id: "item_003",
      title: "Digital Marketing",
      description: "Grow your business with targeted digital marketing strategies.",
      image: "https://example.com/images/digital-marketing.jpg",
      link: "/services/digital-marketing"
    },
    {
      id: "item_004",
      title: "Consulting Services",
      description: "Get expert advice on technology and business strategies.",
      image: "https://example.com/images/consulting-services.jpg",
      link: "/services/consulting"
    },
    {
      id: "item_005",
      title: "IT Support",
      description: "Comprehensive IT support services to keep your business running smoothly.",
      image: "https://example.com/images/it-support.jpg",
      link: "/services/it-support"
    }
  ];
  
  return (
    <div className='flex flex-col items-center min-h-40 p-10'>
      <h2 className='text-3xl'>External</h2>
      <Link href="/external/extra">
        <button className='btn btn-info my-5'>See More</button>
      </Link>
    </div>
  );
};

export default page;
