"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import HeroText from "@/components/HeroText";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
   return (
      <div className=' '>
         <div className='flex flex-col md:flex-row justify-around  py-20  w-full max-w-[1000px] mx-auto  '>
            <Image
               src={"/two.webp"}
               alt='image'
               width={400}
               height={400}
               className='aspect-[16/10] md:aspect-auto object-cover  rounded-full '
            />
            <div className='flex flex-col gap-4 px-12 mt-6'>
               <h1 className='text-2xl font-bold'>Air</h1>
               <p className='text-base font-medium text-[#767676]'>
                  Air sneakers from LIGHT STUDIO are the perfect blend of style, comfort, and durability. The Air technology in the sole
                  provides optimal support and cushioning for your feet, while the classic design is versatile and timeless.
               </p>
               <Link href={"/more"}>
                  <button className='bg-black text-white px-4 py-4 rounded-sm'>view</button>
               </Link>
            </div>
         </div>

         <div className=' relative text-white text-[20px] w-full  max-w-[1000px] mx-auto px-2 md:px-0'>
            <Carousel
               autoPlay={false}
               infiniteLoop={true}
               showThumbs={false}
               showStatus={false}
               showIndicators={false}
               renderArrowPrev={(clickHandler, hasPrev) => (
                  <div
                     onClick={clickHandler}
                     className='absolute left-2 md:left-4 bottom-[50%] w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full
                       bg-transparent/70 z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
                  >
                     <BiArrowBack className='text-sm md:text-lg ' />
                  </div>
               )}
               renderArrowNext={(clickHandler, hasNext) => (
                  <div
                     onClick={clickHandler}
                     className='absolute right-4 bottom-[50%] w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full
                      bg-transparent/70 z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
                  >
                     <BiArrowBack className='rotate-180 text-sm md:text-lg' />
                  </div>
               )}
            >
               <div>
                  <Image
                     src={"/slide-2.png"}
                     alt='image'
                     width={500}
                     height={500}
                     className='aspect-[16/10] md:aspect-auto object-cover rounded-md md:h-[500px] h-[400px]'
                  />
                  <HeroText title='Seasonal Offers' />
               </div>
               <div className=' relative'>
                  <Image
                     src={"/slide-3.png"}
                     alt='image'
                     width={500}
                     height={500}
                     className='aspect-[16/10] md:aspect-auto object-cover rounded-md md:h-[500px] h-[400px] '
                  />
                  <HeroText title='Running Shoe' />
               </div>
               <div>
                  <Image
                     src={"/slide-1.png"}
                     alt='image'
                     width={500}
                     height={500}
                     className='aspect-[16/10] md:aspect-auto object-cover rounded-md md:h-[500px] h-[400px] '
                  />
                  <HeroText title='Nike' />
               </div>
            </Carousel>
            <div
               className=' hidden md:flex  absolute w-full h-28 bg-gradient-to-t from-gray-100
            z-10 to-transparent bottom-0 left-0'
            />
         </div>
      </div>
   );
};

export default Hero;
