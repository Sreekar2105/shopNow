import { filter } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";
import { find } from "rsuite/esm/internals/utils/ReactChildren";

let initialState = {
  itemsCount : 0,
  items : [],
  totalPrice : 0,
}

let cartSlice = createSlice({
    name : "CartSlice",
    initialState,
    reducers : {

        addToCart : (state,action) => 
        {
           let productIndex = state.items.findIndex((product) => product.id === action.payload.id)

           if(productIndex >= 0)
           {
             state.items[productIndex].quantity += 1
             state.itemsCount++
           }

           else
           {
             let tempProduct = {...action.payload,quantity : 1}
             state.items.unshift(tempProduct)
             state.itemsCount++;
           }
        },

        removeFromCart : (state,action) =>
        {
            state.items = state.items.filter((item) => {return item.id !== action.payload.id})
            state.itemsCount -= action.payload.quantity
        },

        clearCart : (state,action) =>
        {
           state.items = []
           state.itemsCount = 0
           state.totalPrice =  0
        },

        decreaseQuantity : (state,action) =>
        {
            let productIndex = state.items.findIndex((product) => product.id === action.payload.id)

           if(productIndex >= 0)
           {
              if(state.items[productIndex].quantity > 1)
              {
                state.items[productIndex].quantity -= 1
                state.itemsCount--;
              }
           }
        },

        cartTotalAmount : (state,action) => 
        {
           let {totalPrice,totalQuantity} = state.items.reduce((cart,item) => {
             let {price,quantity} = item
             cart.totalPrice += parseInt(price.replace(/,/g,'')) * quantity
             cart.totalQuantity += quantity
             return cart
           },

           {
              totalPrice : 0,
              totalQuantity : 0
           })

           state.totalPrice = totalPrice
           state.itemsCount = totalQuantity
           state.totalPrice = state.totalPrice.toLocaleString("en-IN")
        }
    }

});

export default cartSlice.reducer;
export const {addToCart,clearCart,decreaseQuantity,removeFromCart,cartTotalAmount} = cartSlice.actions;