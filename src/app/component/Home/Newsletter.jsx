import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-[75%] mx-auto '>
      <div className='bg-[#E11E36] h-64 p-10 rounded-lg'>
        <div className='flex flex-col justify-center items-center pb-5'>
        <h2 className='text-7xl font-bold'>Newsletter</h2>
        <p className='text-3xl'>Stay updated</p>
        </div>
        <div className=''>
          <form className='flex justify-center items-center '>
            <input type='email' placeholder='Enter your email' className='p-2 border-2 border-black rounded-lg m-2 w-[50%] h-14' />
            <button className='btn bg-white text-black w-[20%] h-14'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;