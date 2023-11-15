import React from "react";
import Link from "next/link";
import { calculatePercentage } from "@/helper";
import Image from "next/image";

const SearchResults = ({ results }) => {
   return (
      <div>
         <div
            className='w-full max-w-2xl items-center justify-center mx-auto
 bg-white shadow-lg shadow-white 
         rounded-lg mt-4 '
         >
            {results.map((result, _id) => {
               return (
                  <Link key={_id} href={{ pathname: "/product", query: { _id: result?._id } }} className='md:flex  px-4 py-2'>
                     <Image
                        src={result?.image}
                        alt='products image'
                        width={500}
                        height={500}
                        className='w-[200px] h-[200px] rounded-full bg-white px-4 md:px-0   object-cover cursor-pointer'
                     />
                     <div className='md:flex flex-col px-4 '>
                        <div className=' font-bold text-black/90 w-full pt-2 pb-1'>{result?.title}</div>
                        <div className='flex gap-x-2 items-center'>
                           <p className='font-medium py-1'>${result?.price}</p>
                           <p className=' line-through text-black/50'>${result?.oldPrice}</p>
                           <p className='font-bold text-green-600'>{calculatePercentage(result?.price, result?.oldPrice)}%off</p>
                        </div>
                        <div>
                           <p>
                              <p>{result?.description}</p>
                           </p>
                        </div>
                     </div>
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default SearchResults;
