import React from "react";
import Link from "next/link";
const MoreProducts = () => {
   return (
      <div>
         <div className='flex justify-center items-center flex-col w-full max-w-[1000px] mx-auto py-20 px-10'>
            <h1 className='py-8 text-2xl font-semibold'>More Products Coming Soon.....</h1>
            <p className='text-base text-[#767676] font-medium'>
               Exciting news awaits! Our team has been hard at work behind the scenes, diligently crafting a range of innovative products
               that we can not wait to unveil.More Products Coming Soon signifies our commitment to delivering an enhanced experience for
               our valued customers. Stay tuned as we prepare to introduce a diverse array of offerings, each designed to elevate your
               experience and cater to your evolving needs.
            </p>
         </div>
         <div className='flex justify-end items-end my-10 mx-10'>
            <Link href={"/"}>
               <button className='bg-black text-white px-4 py-2'>continue shopping</button>
            </Link>
         </div>
      </div>
   );
};

export default MoreProducts;
