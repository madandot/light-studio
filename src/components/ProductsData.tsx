"use client";
import { calculatePercentage } from "@/helper";
import { ItemProps } from "../../type";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
const ProductsData = ({ item }: ItemProps) => {
   const dispatch = useDispatch();
   const [selectedSize, setSelectedSize] = useState("");
   const handleSizeSelection = (size: string) => {
      setSelectedSize(size);
   };
   const handleAddToCart = () => {
      if (!selectedSize) {
         toast.error(" Select your size");
      } else {
         dispatch(addToCart(item));
         toast.success(`${item?.title.substring(0, 15)} Added Successfully!`);
      }
   };
   const startArray = Array.from({ length: item?.rating }, (_, index) => (
      <span key={index} className='text-yellow-400'>
         <AiFillStar />
      </span>
   ));

   return (
      <div className='w-full rounded-lg overflow-hidden group  '>
         <div className=' bg-white shadow-xl  md:px-10 py-10  group-hover:scale-110 duration-200 cursor-pointer   '>
            <Link href={""}>
               <div className='w-full h-[15rem]  relative'>
                  <Image
                     src={item?.image}
                     alt='products image'
                     width={500}
                     height={500}
                     className='w-full h-full bg-white rounded-lg  object-cover cursor-pointer'
                  />
                  {item?.isNew && (
                     <span
                        className=' absolute top-1 right-1 text-base  px-2 py-1 rounded-md
                  cursor-pointer  duration-200 bg-black/80 group-hover:bg-black text-white font-medium'
                     >
                        New
                     </span>
                  )}
               </div>
            </Link>
            <div className=' flex flex-col gap-y-2  '>
               <p className=' font-bold text-black/90 w-full'>{item.title}</p>
               <div className='flex justify-between items-center'>
                  <div className='flex gap-x-2 '>
                     <p className='font-medium'>${item.price}</p>
                     <p className=' line-through text-black/50'>${item?.oldPrice}</p>
                  </div>
                  <div>
                     <p className='font-bold text-green-600'>{calculatePercentage(item?.price, item?.oldPrice)}%off</p>
                  </div>
               </div>
               <button className=' relative flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group'>
                  <span className='w-0 h-0 rounded bg-[#767676] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                  <Link
                     href={{ pathname: "/product", query: { _id: item?._id } }}
                     className='w-full py-4 text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10 font-bold'
                  >
                     View
                  </Link>
               </button>
            </div>
         </div>
         <Toaster />
      </div>
   );
};

export default ProductsData;
