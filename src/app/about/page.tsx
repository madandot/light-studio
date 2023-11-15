import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
const About = () => {
   return (
      <div>
         <div>
            <Head>
               <title>LIGHT STUDIO, Inc. - About Us</title>
               <meta name='description' content='Learn more about LIGHT STUDIO, Inc. - a fictional company.' />
               <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='bg-gray-1 p-8'>
               <div className='max-w-6xl mx-auto'>
                  <h1 className='text-3xl font-bold mb-4'>LIGHT STUDIO, Inc. Overview</h1>
                  <section>
                     <h2 className='text-2xl font-bold mb-2'>Founding and History</h2>
                     <p>
                        Founded on March 17, 224, by Lee and Cook. Originally known as Marshall InLIGHT STUDIOtions, the company officially
                        adopted the name LIGHT STUDIO, Inc. in 224.
                     </p>
                  </section>
                  {/* Add other sections following the same structure */}
                  <section>
                     <h2 className='text-2xl font-bold mb-2 mt-2'>Product In LIGHT STUDIO </h2>
                     <p className='pb-4'>
                        LIGHT STUDIO has a long history of inLIGHT STUDIO in athletic gear. One of its significant advancements was the
                        introduction of AirLine cushioning in footwear with the AirMaxline. This technology revolutionized the sneaker
                        industry by providing enhanced cushioning and support.
                     </p>
                  </section>
                  <section className='flex md:flex-row flex-col '>
                     <div>
                        <Image src={"/recycled-shoe-store.webp"} width={500} height={500} className='md:mt-6' />
                     </div>
                     <div className='flex flex-col md:px-8 py-5'>
                        <p className=' font-bold pb-4'>ABOUT</p>
                        <h1 className='pb-2'>
                           Just Do It with <span className=' font-bold   py-[1px] uppercase'>Light</span>
                           <span className=' uppercase font-bold py-[1px] px-1'>Studio</span>
                        </h1>
                        <p className='pb-2'>
                           <span className=' font-bold   py-[1px] uppercase'>Light</span>
                           <span className=' uppercase font-bold py-[1px] px-1'>Studio</span>s is more than just a brand, it’s a lifestyle.
                           We’re passionate about designing, developing, and manufacturing the world’s best athletic shoes, apparel, and
                           equipment. Our commitment to innovation, sustainability, and social responsibility is what sets us apart. So come
                           on, let’s just do it, together.
                        </p>
                        <Link className='text-bold border-b-2 font-bold border-black w-fit' href={"/"}>
                           <button>READ MORE</button>
                        </Link>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
