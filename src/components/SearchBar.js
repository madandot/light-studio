"use client";
import React, { useState } from "react";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import Image from "next/image";
const SearchBar = () => {
   const [results, setResults] = useState([]);
   return (
      <div>
         <Search setResults={setResults} />
         <SearchResults results={results} />
         <div className='flex flex-col md:flex-row justify-around items-center py-20 px-10'>
            <p className='md:w-96'>
               At <span className=' font-bold   py-[1px] uppercase'>Light</span>
               <span className=' uppercase font-bold py-[1px] px-1'>Studio</span> , we believe that sustainability and style can go hand in
               hand. We’re committed to using sustainable materials and processes in our products and operations, so you can feel good about
               your purchase and its impact on the world.
            </p>
            <Image src={"/one.webp"} alt='' className=' rounded-full' width={300} height={300} />
         </div>
      </div>
   );
};

export default SearchBar;
