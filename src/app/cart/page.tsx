"use client";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import Container from "@/components/Container";
import CartItem from "@/components/CartItem";
import { resetCart } from "@/redux/shoppingSlice";
import PaymentFrom from "@/components/PaymentFrom";
import Link from "next/link";

const CartPage = () => {
   const { productData } = useSelector((state: StateProps) => state?.shopping);
   const dispatch = useDispatch();
   return (
      <Container className='max-w-4xl mx-auto'>
         {productData.length > 0 ? (
            <Container className='bg-[#f4f2ef]  '>
               <h1 className='text-2xl font-semibold mx-4 capitalize'>cart</h1>
               <div>
                  <CartItem />
                  <div onClick={() => dispatch(resetCart())} className='flex items-end justify-end py-4'>
                     <button className='mr-4 md:mr-0 bg-orange-600 px-4 py-4 rounded font-semibold'>Reset cart</button>
                  </div>
                  <div>
                     <PaymentFrom />
                  </div>
               </div>
            </Container>
         ) : (
            <div className='flex flex-center justify-center  items-center flex-col gap-y-6 h-96 bg-white px-4 mx-auto '>
               <p className=' capitalize text-base md:text-2xl font-semibold '>your product cart is currently empty</p>
               <Link href={"/"}>
                  <button className='bg-black px-4 py-2 rounded text-white '> continue your shopping </button>
               </Link>
            </div>
         )}
      </Container>
   );
};

export default CartPage;
