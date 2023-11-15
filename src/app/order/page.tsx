import Container from "@/components/Container";
import OrderDetails from "@/components/OrderDetails";
import React from "react";

const OrderPage = () => {
   return (
      <div>
         <Container className='md:max-w-4xl md:mx-auto mx-2'>
            <OrderDetails />
         </Container>
      </div>
   );
};

export default OrderPage;
