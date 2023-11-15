import React from "react";
import { getProducts } from "@/helper";
import { Products } from "../../../type";
import All from "@/components/All";

const ALLProduct = async () => {
   const products = await getProducts();
   return (
      <>
         <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-3xl font-bold capitalize '>products</h1>
            <p className='border-b-[5px] w-12 rounded border-red-6 '></p>
         </div>
         <div
            className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4
         mt-24 mx-8 my-8'
         >
            {products?.map((item: Products) => (
               <All key={item._id} item={item} />
            ))}
         </div>
      </>
   );
};

export default ALLProduct;
