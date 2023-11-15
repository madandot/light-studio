import Link from "next/link";
import React from "react";

const Logo = () => {
   return (
      <div className='px-4'>
         <Link href='/'>
            <img src='/NOVA.png' alt='' width={100} height={100} />
         </Link>
      </div>
   );
};

export default Logo;
