"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import HeroText from "@/components/HeroText";
import Link from "next/link";

const Hero = () => {
   return (
      <div className=' '>
         <div className=' relative text-white text-[20px] w-full max-w-[1360px] mx-auto'>
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
                       bg-transparent/30 z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
                  >
                     <BiArrowBack className='text-sm md:text-lg ' />
                  </div>
               )}
               renderArrowNext={(clickHandler, hasNext) => (
                  <div
                     onClick={clickHandler}
                     className='absolute right-4 bottom-[50%] w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full
                      bg-transparent/30 z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
                  >
                     <BiArrowBack className='rotate-180 text-sm md:text-lg' />
                  </div>
               )}
            >
               <div>
                  <img src='/bannerone.jpg' height={595} className='aspect-[16/10] md:aspect-auto object-cover md:h-[515px] ' />
                  <HeroText title='OutWare Picks' />
               </div>
               <div>
                  <img src='/slide-2.png' className='aspect-[16/10] md:aspect-auto object-cover' />
                  <HeroText title='Seasonal Offers' />
               </div>
               <div>
                  <img src='/bannertwo.jpg' height={595} className='aspect-[16/10] md:aspect-auto object-cover md:h-[515px] ' />
                  <HeroText title='Best for women' />
               </div>
               <div className=' relative'>
                  <img src='/slide-3.png' className='aspect-[16/10] md:aspect-auto object-cover' />
                  <HeroText title='Running Shoe' />
               </div>
               <div>
                  <img src='/bannerthree.jpg' height={595} className='aspect-[16/10] md:aspect-auto object-cover md:h-[515px] ' />
                  <HeroText title='Best for men' />
               </div>
               <div>
                  <img src='/slide-1.png' className='aspect-[16/10] md:aspect-auto object-cover' />
                  <HeroText title='Nike' />
               </div>
            </Carousel>
            <div
               className=' absolute w-full h-44 bg-gradient-to-t from-gray-100
            z-10 to-transparent bottom-0 left-0'
            />
         </div>
      </div>
   );
};

export default Hero;
