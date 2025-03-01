import React from 'react';
import Link from 'next/link'; // Make sure to import Link here

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
    <div className='p-10'>
      <h2>Extra</h2>
      {
        items.map((item) => (
          <div key={item.id} className='p-5'>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <Link href={item.id}>
              <button className='bg-orange-500 px-3 cursor-pointer rounded-3xl'>Learn More</button>
            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default page;
