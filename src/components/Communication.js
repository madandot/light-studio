import React from "react";

const Communication = () => {
   return (
      <div>
         <div>
            <h1 className='text-center py-2 text-2xl font-bold capitalize'>
               Join the <span className=' font-bold   py-[1px] uppercase'>Light</span>
               <span className=' uppercase font-bold py-[1px] px-1'>Studio</span> Community
            </h1>
            <p className='text-center py-2 px-4'>
               When you choose <span className=' font-bold   py-[1px] uppercase'>Light</span>
               <span className=' uppercase font-bold py-[1px] px-1'>Studio</span>, you’re not just getting an amazing product, you’re
               joining a community of like-minded individuals who are passionate about sports, fitness, and pushing themselves to new
               limits.
            </p>
            <div className=' grid md:grid-cols-2 gap-8 px-8 py-8 bg-[#f4f8fd]'>
               <div>
                  <p className='text-sky-600 font-bold'>01.</p>
                  <h1 className='text-2xl font-bold/90 py-2'>Unmatched Quality</h1>
                  <p className='text-xl font-medium text-[#767676]'>
                     Our products are crafted with the utmost care, ensuring that you get the best quality every time.
                  </p>
                  <p></p>
               </div>
               <div>
                  <p className='text-sky-600 font-bold'>02.</p>
                  <h1 className='text-2xl font-bold/90 py-2'>Sustainability</h1>
                  <p className='text-xl font-medium text-[#767676]'>
                     We’re committed to reducing our environmental impact, using sustainable materials and processes in our products and
                     operations.
                  </p>
                  <p></p>
               </div>
               <div>
                  <p className='text-sky-600 font-bold'>03.</p>
                  <h1 className='text-2xl font-bold/90 py-2'>Innovative Design</h1>
                  <p className='text-xl font-medium text-[#767676]'>
                     LIGHT STUDIO is always pushing the limits of design and technology, so you can get the most innovative and cutting-edge
                     products available.
                  </p>
               </div>
               <div>
                  <p className='text-sky-600 font-bold'>04.</p>
                  <h1 className='text-2xl font-bold/90 py-2'>Social Responsibility</h1>
                  <p className='text-xl font-medium text-[#767676]'>
                     LIGHT STUDIO is dedicated to making a positive impact on the world, from supporting social justice causes to empowering
                     communities through sports.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Communication;
