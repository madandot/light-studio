import React from "react";
import { ItemProps } from "../../type";
import toast, { Toaster } from "react-hot-toast";
// import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { calculatePercentage } from "@/helper";

// import { addToCart } from "@/redux/shoppingSlice";

const All = ({ item }: ItemProps) => {
   //  const dispatch = useDispatch();
   const startArray = Array.from({ length: item?.rating }, (_, index) => (
      <span key={index} className='text-yellow-400'>
         <AiFillStar />
      </span>
   ));

   return (
      <div>
         <div className='w-full rounded-lg overflow-hidden  '>
            <div>
               <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
                  <div className='w-full h-[15rem] group overflow-hidden relative'>
                     <Image
                        src={item?.image}
                        alt='products image'
                        width={500}
                        height={500}
                        className='w-full h-full object-cover group-hover:scale-110 duration-200  cursor-pointer'
                     />
                     {item?.isNew && (
                        <span
                           className=' absolute top-1 right-1 text-base border border-slate-400/40 px-2 py-1 rounded-full 
                  cursor-pointer group-hover:bg-[#64b0d3] duration-200 bg-white font-medium'
                        >
                           Just In
                        </span>
                     )}
                  </div>
               </Link>
               <div className='border border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white'>
                  <p className=' font-medium w-full'>{item.title}</p>
                  <div className='flex justify-between items-center'>
                     <div className='flex gap-x-2 '>
                        <p className='font-medium'>${item.price}</p>
                        <p className=' line-through text-black/50'>${item?.oldPrice}</p>
                     </div>
                     <div>
                        <p className='font-bold text-green-600'>{calculatePercentage(item?.price, item?.oldPrice)}%off</p>
                     </div>
                  </div>
                  <div className='flex justify-between items-center'>
                     {/* <button
                        onClick={() => {
                           dispatch(addToCart(item));
                           toast.success(`${item?.title.substring(0, 15)} Added Successfully!`);
                        }}
                        className='bg-transparent/90 text-white px-1 py-1 rounded'
                     >
                        Add to Cart
                     </button> */}
                     <div>
                        <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
                           <button className='bg-black text-white text-xl font-bold px-4 py-2 capitalize rounded-md'>view</button>
                        </Link>
                     </div>

                     <p className='flex items-center'>{startArray}</p>
                  </div>
               </div>
            </div>
            <Toaster />
         </div>
      </div>
   );
};

export default All;
