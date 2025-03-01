import React from 'react';

const HomeCard = () => {

  const cardData = [
    {
      title: 'IT Consultancy & Support',
      description: 'Expert guidance to keep your IT systems efficient and secure.',
      image: 'https://techcloudpro.com/img/tech-consulting/animation.png'
    },
    {
      title: 'Web App Development',
      description: 'Modern, responsive websites and apps for seamless user experiences.',
      image: 'https://shourai.io/wp-content/uploads/2020/07/kindpng_1272110.png'
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'Boost online visibility with targeted marketing and SEO strategies.',
      image: 'https://pepperyourcontent.com/wp-content/uploads/2021/12/image-1.png'
    },
    {
      title: 'E-commerce Development',
      description: 'Create and scale your online store for maximum sales and engagement.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJC9rX4twBy-zeZAQCSKeQBXsRNcGqgDRaww&s'
    },
  ];

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5'>
        {
          cardData.map((card, index) => (
            <div key={index} className='bg-white text-black rounded-md p-5'>
              <img className='h-40 w-full object-contain' src={card.image} alt={card.title} />
              <h3 className='text-xl font-bold'>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HomeCard;