import Container from "@/components/Container";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
   title: String;
}
const HeroText = ({ title }: Props) => {
   return (
      <div className='md:inline-block absolute top-8 left-0 w-full h-full'>
         <Container className='flex flex-col gap-y-6 justify-center h-[70%]'>
            <motion.h1
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.5 }}
               className='md:text-7xl text-lg  md:font-bold text-black'
            >
               {title}
            </motion.h1>
            <motion.p
               initial={{ y: 40, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6 }}
               className='md:text-lg md:font-medium font-normal text-sm text-black'
            >
               Explore the latest Outware Picks collection, featuring cutting-edge <br />
               technology and stylish designs for the modern consumer
            </motion.p>
            <motion.p
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.7 }}
               className='text-sm font-medium  text-white/10'
            >
               <Link
                  className='font-oswald bg-white/90 hover:bg-[#b4a6a6] hover:text-black md:font-bold rounded-md ml-8 md:px-6 md:py-3  text-black/[0.9] 
                 md:uppercase cursor-pointer transition duration-200 ease-in-out text-lg px-4 py-2
                 md:text-[15px] '
                  href='/all'
               >
                  Show Now
               </Link>
            </motion.p>
         </Container>
      </div>
   );
};

export default HeroText;
