import Link from "next/link";
import React from "react";

const TopPick = () => {
   return (
      <div>
         <div className='flex flex-col md:flex-row items-center mb-10 md:mx-10 '>
            <div>
               <img src='/one.webp' alt='' />
            </div>
            <div className='md:px-8 pt-4'>
               <h1 className='text-2xl font-bold pb-4'>Top Picked Product</h1>
               <p className='pb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem quia earum commodi quidem itaque veritatis
                  dolorem alias nostrum odit!
               </p>
               <Link href={"/"}>
                  <button className='bg-black/80 hover:bg-black text-white px-4 py-3'>Shop Now</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default TopPick;
