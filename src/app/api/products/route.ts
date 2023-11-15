import { NextResponse } from "next/server";
import { productsData } from "@/constants/data";
export const GET = async () => {
   try {
      return NextResponse.json({
         message: "Products fetched successfully",
         success: true,
         productsData,
      });
   } catch (error) {
      return NextResponse.json(
         {
            error: "product loading error",
         },
         { status: 500 }
      );
   }
};
