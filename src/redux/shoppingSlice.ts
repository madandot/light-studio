import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../type";
interface StoreState {
   productData: Products[];
   userInfo: null | string;
   orderData: [];
}
const initialState: StoreState = {
   productData: [],
   userInfo: null,
   orderData: [],
};
export const shoppingSlice = createSlice({
   name: "shopping",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const productToAdd = action.payload;
         const existingProductIndex = state.productData.findIndex((item: Products) => item._id === productToAdd._id);

         if (existingProductIndex !== -1) {
            // If product exists in cart, update its quantity
            state.productData[existingProductIndex].quantity += productToAdd.quantity;
         } else {
            // If product doesn't exist, add it to the cart
            state.productData.push(productToAdd);
         }
      },

      increaseQuantity: (state, action) => {
         const existingProduct = state.productData.find((item: Products) => item._id === action.payload._id);
         existingProduct && existingProduct.quantity++;
      },
      decreaseQuantity: (state, action) => {
         const existingProduct = state.productData.find((item: Products) => item._id === action.payload._id);
         if (existingProduct?.quantity === 1) {
            existingProduct.quantity === 1;
         } else {
            existingProduct && existingProduct.quantity--;
         }
      },
      deleteProduct: (state, action) => {
         state.productData = state.productData.filter((item) => item._id !== action.payload);
      },
      resetCart: (state) => {
         state.productData = [];
      },
      addUser: (state, action) => {
         state.userInfo = action.payload;
      },
      deleteUser: (state) => {
         state.userInfo = null;
      },
      saveOrder: (state, action) => {
         state.orderData = action.payload;
      },
      resetOrder: (state) => {
         state.orderData = [];
      },
   },
});
export const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct, resetCart, addUser, deleteUser, saveOrder, resetOrder } =
   shoppingSlice.actions;
export default shoppingSlice.reducer;
