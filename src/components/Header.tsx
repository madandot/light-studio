"use client";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import React, { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight, BiSolidUser } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import { addUser, deleteUser } from "@/redux/shoppingSlice";
import { FaBookmark } from "react-icons/fa";
import { CiUser, CiMail } from "react-icons/ci";

const Header = () => {
   const dispatch = useDispatch();
   const { data: session } = useSession();
   const { productData, orderData } = useSelector((state: StateProps) => state.shopping);

   useEffect(() => {
      if (session) {
         dispatch(
            addUser({
               name: session?.user?.name,
               email: session?.user?.email,
               // image: session?.user?.image,
            })
         );
      } else {
         dispatch(deleteUser);
      }
   }, [session, dispatch]);

   const [mobileMenu, setMobileMenu] = useState(false);
   const toggleMobileMenu = () => {
      setMobileMenu(!mobileMenu);
   };
   return (
      <div className=' top-0 sticky z-50 bg-[#ffff] '>
         <div className='flex justify-between items-center py-4 md:px-8'>
            <div>
               <Logo />
            </div>
            <div className='flex items-center '>
               <div className='hidden md:flex items-center '>
                  <div>
                     <Link href={"/"}>
                        <p
                           className=' font-normal hover:font-bold px-4 text-base text-[#767676]  decoration-200
                          hover:text-[#262626] border-r-[1px] border-[#767676] '
                        >
                           Home
                        </p>
                     </Link>
                  </div>
                  <Link href='/contact'>
                     <p
                        className=' font-normal hover:font-bold px-4 text-base text-[#767676]  decoration-200
                          hover:text-[#262626]  border-r-[1px] border-[#767676]  '
                     >
                        Contact
                        {/* <CiMail /> */}
                     </p>
                  </Link>
                  <div>
                     <Link href='/about'>
                        <p
                           className=' font-normal hover:font-bold px-4 text-base text-[#767676]  decoration-200
                        hover:text-[#262626]  border-r-[1px] border-[#767676] '
                        >
                           About
                           {/* <CiMail /> */}
                        </p>
                     </Link>
                  </div>
               </div>
               <div className='flex items-center gap-x-4'>
                  {!session && (
                     <Link
                        onClick={() => signIn()}
                        href='/'
                        className=' font-normal hover:font-bold px-4 text-base text-[#767676]  decoration-200
                          hover:text-[#262626]  border-r-[1px] border-[#767676]  '
                     >
                        SignIn
                        {/* <CiUser /> */}
                     </Link>
                  )}
                  {orderData?.order?.length > 0 && session && (
                     <Link
                        href={"/order"}
                        className=' font-normal hover:font-bold px-4 text-base text-[#767676]  decoration-200
                          hover:text-[#262626]  border-r-[1px] border-[#767676]  '
                     >
                        <FaBookmark />
                     </Link>
                  )}
                  <Link
                     href={"/cart"}
                     className='flex items-center  font-normal hover:font-bold px-4 text-base text-[#767676]  decoration-200
                          hover:text-[#262626]  relative  '
                  >
                     <BsCart />
                     <span className=' text-base  absolute -top-4 right-2  '>{productData ? productData?.length : 0}</span>
                  </Link>
               </div>
               <div className='flex items-center gap-x-8'>
                  <button
                     onClick={toggleMobileMenu}
                     className='text-black text-4xl pl-4 duration-300 transition ease-in-out flex md:hidden'
                  >
                     {mobileMenu ? <VscChromeClose /> : <BiMenuAltRight />}
                  </button>
               </div>
               {/**Contact, About, Login, Cart End */}
               {/** mobile menu */}
               <div className='lg:hidden z-50'>
                  {mobileMenu && (
                     <div
                        className={`absolute top-20 left-0 w-full h-full  transform ${
                           mobileMenu ? "translate-y-0" : "-translate-y-100"
                        } transition-transform duration-700 ease-in-out`}
                     >
                        <div className=' bg-white  rounded flex flex-col gap-y-4 py-4 px-8 text-2xl'>
                           <Link href={"/"}>
                              <p
                                 className=' font-normal hover:font-bold px-4 text-base text-[#767676]  decoration-200
                          hover:text-[#262626] border-r-[1px] border-[#767676] '
                              >
                                 Home
                              </p>
                           </Link>
                           <p
                              className=' font-normal hover:font-bold px-4 text-base text-[#767676]  decoration-200
                          hover:text-[#262626]  border-r-[1px] border-[#767676]  '
                           >
                              Contact
                              {/* <CiMail /> */}
                           </p>
                           <Link href='/about'>
                              <p
                                 className=' font-normal hover:font-bold px-4 text-base text-[#767676]  decoration-200
                          hover:text-[#262626]  border-r-[1px] border-[#767676] '
                              >
                                 About
                                 {/* <CiMail /> */}
                              </p>
                           </Link>
                        </div>
                     </div>
                  )}
               </div>
               {session && (
                  <div
                     className=' font-normal hover:font-bold px-4 text-base text-[#767676]  decoration-200
                          hover:text-[#262626]  cursor-pointer '
                     onClick={() => signOut()}
                  >
                     <FiLogOut />
                  </div>
               )}
               {/** Logout session End */}
            </div>
         </div>
      </div>
   );
};

export default Header;
