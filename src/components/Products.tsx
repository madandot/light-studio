import { getProducts } from "@/helper";
import React from "react";
import Container from "@/components/Container";
import ProductsData from "@/components/ProductsData";
import { Products } from "../../type";
const Products = async () => {
   const products = await getProducts();

   return (
      <div>
         <Container
            className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4
         mt-24 mx-8 my-8'
         >
            {products?.map((item: Products) => (
               <ProductsData key={item._id} item={item} />
            ))}
         </Container>
      </div>
   );
};

export default Products;
