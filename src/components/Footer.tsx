"use client";
import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillGithub, AiFillRedditCircle } from "react-icons/ai";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
   return (
      <div className='w-full bg-[#767676] px-8'>
         <Container className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            <div>
               <div>
                  <h1 className=' font-bold text-xl py-4'>LIGHT STUDIO</h1>
                  <p className=' font-light pb-4  text-white'>
                     LIGHT STUDIO is a globally renowned American multinational corporation that is engaged in the design, marketing, and
                     sales of athletic footwear, apparel, equipment, and accessories manufacturing.
                  </p>
               </div>
            </div>
            <div className=''>
               <h1 className='py-4 text-xl font-bold'>Latest posts</h1>
               <p className='hover:scale-100 hover:text-black cursor-pointer text-[12.5px] transition duration-200 py-1 text-white '>
                  Where Music Is Headed Next
               </p>
               <p className='hover:scale-100 hover:text-black cursor-pointer text-[12.5px] transition duration-200 py-1 text-white '>
                  Sports Brand New Advertising Campaign
               </p>
               <p className='hover:scale-100 hover:text-black cursor-pointer text-[12.5px] transition duration-200 py-1 text-white '>
                  Snippets From The Tech Mobile Conference
               </p>
               <p className='hover:scale-100 hover:text-black cursor-pointer text-[12.5px] transition duration-200 py-1 text-white '>
                  New Music Video Will Blow Your Minds
               </p>
            </div>
            <div>
               <h1 className='py-4 text-xl font-bold'>Links</h1>
               <Link href={"/"}>
                  <p className=' hover:text-black cursor-pointer font-semibold text-white py-1'>Home</p>
               </Link>
               <Link href={"/cart"}>
                  <p className=' hover:text-black cursor-pointer font-semibold text-white py-1'>Cart</p>
               </Link>
               <Link href={"/about"}>
                  <p className=' hover:text-black cursor-pointer font-semibold text-white py-1'>About</p>
               </Link>
               <Link href={"/newletter"}>
                  <p className=' hover:text-black cursor-pointer font-semibold text-white py-1'>Newsletter</p>
               </Link>
               <Link href={"/contact"}>
                  <p className=' hover:text-black cursor-pointer font-semibold text-white py-1'>Contact</p>
               </Link>
            </div>
            <div className=''>
               <h1 className=' font-bold text-black capitalize py-4'>Pay us with your trusted services</h1>
               <Image src={"/payment.png"} alt='' height={100} width={200} />
               <div className='flex items-center gap-x-2 text-3xl cursor-pointer py-8 text-white'>
                  <Link href={""} onClick={() => window.open("https://www.instagram.com/", "_target")}>
                     <AiFillInstagram className='hover:text-black' />
                  </Link>
                  <Link href={""} onClick={() => window.open("https://www.facebook.com/", "_target")}>
                     <AiFillFacebook className='hover:text-black' />
                  </Link>
                  <Link href={""} onClick={() => window.open("https://github.com/", "_target")}>
                     <AiFillGithub className='hover:text-black' />
                  </Link>
                  <Link href={""} onClick={() => window.open("https://www.reddit.com/register/?rdt=53331", "_target")}>
                     <AiFillRedditCircle className='hover:text-black' />
                  </Link>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Footer;
