import Container from "@/components/Container";
import { getSingleProduct, getTrendingProducts } from "@/helper";
import { Products } from "../../../type";
import ProductsData from "@/components/ProductsData";
import SingleProduct from "@/components/SignleProduct";
import TopPick from "@/components/TopPick";

type Props = {
   searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = async ({ searchParams }: Props) => {
   const _idString = searchParams?._id;
   const _id = Number(_idString);
   const product = getSingleProduct(_id);
   const data = await getTrendingProducts();

   return (
      <div>
         <Container className='mx-8 my-8 '>
            <SingleProduct product={product} />
            <TopPick />
            <div>
               <p className='md:text-3xl text-xl py-4 font-bold'>Tranding Products</p>
               <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                  {data?.map((item: Products) => (
                     <ProductsData key={item._id} item={item} />
                  ))}
               </div>
            </div>
         </Container>
      </div>
   );
};

export default ProductPage;
