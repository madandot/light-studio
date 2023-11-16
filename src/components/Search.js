"use client";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
// import { json } from "stream/consumers";
const Search = ({ setResults }) => {
   const [searchTerm, setSearchTerm] = useState("");
   const fetchData = (value) => {
      fetch("https://fakestoreapiserver.reactbd.com/smart")
         .then((Response) => Response.json())
         .then((json) => {
            const results = json.filter((user) => {
               return value && user && user.title && user.title.toLowerCase().includes(value);
            });
            setResults(results);
         });
   };
   const handleChange = (value) => {
      setSearchTerm(value);
      fetchData(value);
   };
   // const handleSearch = (e) => {
   //    e.preventDefault();
   //    console.log("Search Term:", searchTerm);
   // };
   return (
      <div>
         <div className='flex flex-col justify-center items-center my-20'>
            <div className='text-3xl font-bold py-4 '>
               <p className='md:border md:border-[#767676] px-2 py-2 text-center'>
                  Welcome to <span className=' font-light bg-black text-white px-2  py-[1px] uppercase'>Light</span>
                  <span className=' uppercase py-[1px] px-2'>Studio</span>
               </p>
            </div>
            <form>
               <div className='flex'>
                  <input
                     type='search'
                     value={searchTerm}
                     onChange={(e) => handleChange(e.target.value)}
                     placeholder='search your product here'
                     className='border-2 border-[#767676] h-12 md:w-[500px] outline-none rounded-s-md px-1'
                  />
                  <button type='submit' className='h-12 bg-black text-white w-12 rounded-e-md flex flex-col items-center justify-center'>
                     <BsSearch />
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Search;
