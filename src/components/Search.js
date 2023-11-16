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
            const lowerCaseValue = value.toLowerCase(); // Convert search value to lowercase
            const upperCaseValue = value.toUpperCase(); // Convert search value to uppercase
            const results = json.filter((user) => {
               const lowerCaseTitle = user.title.toLowerCase(); // Convert title to lowercase
               const upperCaseTitle = user.title.toUpperCase(); // Convert title to uppercase
               return value && user && user.title && (lowerCaseTitle.includes(lowerCaseValue) || upperCaseTitle.includes(upperCaseValue));
            });
            if (results.length === 0) {
               setResults([]); // No results found, set an empty array
               setNotFoundMessage("Product is not available."); // Set the not found message
            } else {
               setResults(results); // Set the filtered results
               setNotFoundMessage(""); // Clear the not found message if results are found
            }
         });
   };
   const handleChange = (value) => {
      setSearchTerm(value);
      fetchData(value);
   };

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
