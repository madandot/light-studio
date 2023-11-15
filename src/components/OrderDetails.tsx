"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { resetOrder } from "@/redux/shoppingSlice";
import Link from "next/link";

const OrderDetails = () => {
   const dispatch = useDispatch();
   const { orderData } = useSelector((state: StateProps) => state?.shopping);
   const [totalAmt, setTotalAmt] = useState(0);

   useEffect(() => {
      let amt = 0;
      orderData?.order?.map((item: Products) => {
         amt += item.price * item.quantity;
         return;
      });
      setTotalAmt(amt);
   }, [orderData]);
   return (
      <div>
         {orderData?.order?.length > 0 ? (
            <div>
               <div className='hidden  md:grid md:grid-cols-7  uppercase text-sm font-bold text-orange-600 py-2 '>
                  <p className='col-span-4'>Items</p>
                  <p className='flex items-center justify-center'>Quantity</p>
                  <p className='flex items-center justify-center'>Unit Price</p>
                  <p className='flex items-center justify-center'>Amount</p>
               </div>
               <div className='py-2 hidden md:flex flex-col justify-center gap-2'>
                  {orderData?.order?.map((item: Products) => (
                     <div key={item?._id} className='py-2  grid grid-cols-7 items-center bg-black px-4 text-white rounded-md'>
                        <div className=' col-span-4 flex items-start gap-2 text-sm'>
                           <Image src={item?.image} alt='image' width={500} height={500} className='w-20 h-20 object-cover rounded' />
                           <div>
                              <h3 className='text-xl font-semibold mb-.5 '>{item?.title}</h3>
                              <div className='flex items-center'>
                                 <p className='text-base font-medium pr-2 capitalize'>category :</p>
                                 <p className='font-bold text-orange-700'>{item?.category}</p>
                              </div>
                           </div>
                        </div>
                        <p className='flex items-center justify-center'>{item?.quantity}</p>
                        <p className='flex items-center justify-center'>
                           <FormattedPrice amount={item?.price} />
                        </p>
                        <p className='flex items-center justify-center'>
                           <FormattedPrice amount={item?.price * item.quantity} />
                        </p>
                     </div>
                  ))}
               </div>
               {/* Mobile responsive start */}
               <div className='md:hidden flex flex-col gap-y-2'>
                  <h1 className='text-xl font-semibold px-6 py-4'>Orders</h1>
                  {orderData?.order?.map((item: Products) => (
                     <div key={item?._id} className='py-2  bg-white px-4 text-black rounded-md'>
                        <div className=''>
                           <Image src={item?.image} alt='image' width={500} height={500} className='w-50 h-50 object-cover rounded' />
                           <div>
                              <h3 className='text-xl font-semibold mb-.5 '>{item?.title}</h3>
                              <div className='flex items-center'>
                                 <p className='text-base font-medium pr-2 capitalize'>category :</p>
                                 <p className='font-bold text-orange-700'>{item?.category}</p>
                              </div>
                           </div>
                        </div>
                        <div className='flex items-center font-bold text-[#767676]'>
                           <p className='text-base  pr-2 capitalize'>Quantity :</p>
                           <p className=''>{item?.quantity}</p>
                        </div>
                        <div className='flex items-center font-bold text-[#767676]'>
                           <p className='text-base  pr-2 capitalize'>Price</p>
                           <FormattedPrice amount={item?.price} />
                        </div>
                        <div className='flex items-center font-bold text-[#767676]'>
                           <p className='text-base  pr-2 capitalize'>Total Price</p>
                           <FormattedPrice amount={item?.price * item.quantity} />
                        </div>
                     </div>
                  ))}
               </div>
               {/* Mobile responsive end */}
               <div className='text-lg font-medium py-4 px-6'>
                  <p>Payment Details</p>
               </div>
               <div className='flex items-center px-6 '>
                  <p className='text-xl font-semibold pr-4'>Total Page :</p>
                  <span className=' text-green-700 font-bold'>
                     <FormattedPrice amount={totalAmt} />
                  </span>
               </div>
               <div className='py-4 px-6'>
                  <button
                     onClick={() => dispatch(resetOrder())}
                     className='bg-black text-white px-4 py-2 rounded hover:border-orange-600 hover:font-bold 
             border-2 duration-300 hover:bg-white hover:text-black'
                  >
                     Reset Order
                  </button>
               </div>
            </div>
         ) : (
            <div className='flex flex-col items-center justify-center min-h-[400px]'>
               <p className='text-2xl font-bold py-4'>Nothing is to show</p>
               <Link href={"/"}>
                  <button className='bg-black text-white px-4 py-2 rounded-md  '>Return to Home</button>
               </Link>
            </div>
         )}
      </div>
   );
};

export default OrderDetails;
