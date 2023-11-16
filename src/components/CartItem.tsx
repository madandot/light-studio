import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "@/redux/shoppingSlice";
import { calculatePercentage } from "@/helper";
const CartItem = () => {
   const { productData } = useSelector((state: StateProps) => state?.shopping);
   const dispatch = useDispatch();
   return (
      <div className='flex flex-col gap-y-2'>
         <div className='flex flex-col gap-y-2'>
            {productData?.map((item: Products) => (
               <div key={item._id} className='bg-white p-4 flex flex-col md:flex-row items-center relative '>
                  <Image src={item?.image} width={200} height={200} alt='prodcut image' loading='lazy' className='w-30 h-25 object-cover' />
                  <div className='flex flex-col gap-x-2 gap-y-2 px-4'>
                     <p className='md:text-lg text-sm font-bold py-2'>{item?.title}</p>
                     <div className='flex items-center space-x-2'>
                        <p className='text-lg font-bold/80'>$ {item?.price}</p>
                        <p className='text-lg font-semibold line-through text-black/50'>${item?.oldPrice}</p>
                        <p className='text-lg text-green-500 font-medium'>{calculatePercentage(item?.price, item?.oldPrice)}%off</p>
                     </div>
                     <div className='flex items-center gap-x-2 cursor-pointer'>
                        <p className='text-xl font-bold/80'>Quantity</p>
                        <div className='flex items-center gap-x-4'>
                           <span className='text-xl' onClick={() => dispatch(decreaseQuantity(item))}>
                              <FiChevronLeft />
                           </span>
                           <span className='text-xl'>{item?.quantity}</span>
                           <span className='text-xl' onClick={() => dispatch(increaseQuantity(item))}>
                              <FiChevronRight />
                           </span>
                        </div>
                     </div>
                     <p className=''>
                        <span className='text-lg font-bold/80 '>Total Price : </span>
                        <span className='text-lg'>${item?.price * item?.quantity}</span>
                     </p>
                  </div>
                  <div>
                     <span
                        onClick={() => dispatch(deleteProduct(item?._id))}
                        className=' absolute md:top-20 md:right-10 top-[50%] right-4 text-xl hover:text-red-600 cursor-pointer'
                     >
                        <AiFillDelete />
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CartItem;
