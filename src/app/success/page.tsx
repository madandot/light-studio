import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
   return (
      <Container className=' flex justify-center items-center py-20'>
         <div className=' min-h-[500px] flex flex-col items-center justify-center gap-y-5'>
            <p className='text-4xl font-bold text-center'>Your Payment Accepted by LIGHT STUDIO.com</p>
            <p className='text-2xl font-semibold text-center'>Now you can view your orders or continue shopping with us</p>
            <div className=' flex md:flex-row flex-col items-center gap-x-4 gap-y-4 md:gap-y-0'>
               <Link href={"/order"}>
                  <button className='bg-black text-white px-4 py-2 font-bold rounded-md capitalize'>view order</button>
               </Link>
               <Link href={"/"}>
                  <button className='bg-black text-white px-4 py-2 font-bold rounded-md capitalize'>Continue shopping</button>
               </Link>
            </div>
         </div>
      </Container>
   );
};

export default SuccessPage;
