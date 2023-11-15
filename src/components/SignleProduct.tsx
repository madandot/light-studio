"use client";
import { calculatePercentage } from "@/helper";
import { addToCart } from "@/redux/shoppingSlice";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";

const SingleProduct = ({ product }: any) => {
   const startArray = Array.from({ length: product?.rating }, (_, index) => (
      <span key={index} className='text-yellow-400'>
         <AiFillStar />
      </span>
   ));

   const dispatch = useDispatch();
   const [selectedSize, setSelectedSize] = useState("");
   const handleSizeSelection = (size: string) => {
      setSelectedSize(size);
   };
   const handleAddToCart = () => {
      if (!selectedSize) {
         // If no size is selected, show a message using toast
         toast.error("Please select a size");
      } else {
         // If a size is selected, dispatch the addToCart action and show success message
         dispatch(addToCart(product));
         toast.success(`${product?.title.substring(0, 15)} Added Successfully!`);
      }
   };
   return (
      <div className='grid lg:grid-cols-2  bg-white p-4  gap-5 mb-10'>
         <div>
            <Image
               src={product?.image}
               alt='product image'
               width={500}
               height={500}
               className='w-full h-full max-h-[700px] object-cover rounded-lg '
            />
         </div>
         <div>
            <div className='md:px-8'>
               <p className='text-2xl font-bold py-3'>{product?.title}</p>
               <div className='flex items-center justify-between py-1'>
                  <div className='flex items-center gap-x-2 md:gap-x-4 text-xl font-semibold'>
                     <p>${product?.price}</p>
                     <p className='line-through text-black/50'>${product?.oldPrice}</p>
                  </div>
                  <div>
                     <p className=' text-green-500 font-bold pr-8'>{calculatePercentage(product?.price, product?.oldPrice)}%off</p>
                  </div>
               </div>
               <div>
                  <p className='text-base font-medium py-4'>{product?.description}</p>
               </div>
               <div className='flex items-center gap-x-2'>
                  <p className='text-lg font-bold capitalize'>category :</p>
                  <p>{product?.category}</p>
               </div>
               <div className='flex items-center gap-x-2'>
                  <p className='text-lg font-bold capitalize'>Rating :</p>
                  <p className='flex items-center'>{startArray}</p>
               </div>
               <div className='flex items-center md:gap-x-8 gap-x-4 mt-4 cursor-pointer'>
                  <p
                     className={`border-[3px] border-black/50 font-medium w-[3rem] h-[3rem] flex items-center justify-center rounded-[100%] ${
                        selectedSize === "S" ? "bg-blue-500 text-white" : ""
                     }`}
                     onClick={() => handleSizeSelection("S")}
                  >
                     S
                  </p>
                  <p
                     className={`border-[3px] border-black/50 font-medium w-[3rem] h-[3rem] flex items-center justify-center rounded-[100%] ${
                        selectedSize === "M" ? "bg-blue-500 text-white" : ""
                     }`}
                     onClick={() => handleSizeSelection("M")}
                  >
                     M
                  </p>
                  <p
                     className={`border-[3px] border-black/50 font-medium w-[3rem] h-[3rem] flex items-center justify-center rounded-[100%] ${
                        selectedSize === "L" ? "bg-blue-500 text-white" : ""
                     }`}
                     onClick={() => handleSizeSelection("L")}
                  >
                     L
                  </p>
                  <p
                     className={`border-[3px] border-black/50 font-medium w-[3rem] h-[3rem] flex items-center justify-center rounded-[100%] ${
                        selectedSize === "XL" ? "bg-blue-500 text-white" : ""
                     }`}
                     onClick={() => handleSizeSelection("XL")}
                  >
                     XL
                  </p>
               </div>
               <div>
                  <button
                     onClick={handleAddToCart}
                     className='bg-black px-4 py-2 rounded-md text-white hover:text-orange-500 duration-300 mt-8'
                  >
                     Add to cart
                  </button>
               </div>
            </div>
         </div>
         <Toaster />
      </div>
   );
};

export default SingleProduct;
