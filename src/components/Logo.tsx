import Link from "next/link";
import React from "react";
import Image from "next/image";
const Logo = () => {
   return (
      <div className='px-4'>
         <Link href='/'>
            <Image src={"/NOVA.png"} alt='' width={100} height={100} />
         </Link>
      </div>
   );
};

export default Logo;
