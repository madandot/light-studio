import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const NotFound = () => {
   return (
      <div>
         <Container className='flex items-center justify-center py-20'>
            <div className='max-w-2xl min-h-[400px] flex flex-col justify-center items-center gap-y-5'>
               <h2 className='text-4xl font-bold '> your pages not found</h2>
               <p className='text-base font-medium text-center'>
                  opp! the pages yor are looking for does not exist. It might have been moved or deleted
               </p>
               <Link href={"/"}>
                  <p className='bg-black text-white px-4 py-2 rounded-full font-semibold'>Back To Home</p>
               </Link>
            </div>
         </Container>
      </div>
   );
};

export default NotFound;
