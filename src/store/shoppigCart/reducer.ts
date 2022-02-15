import { createSlice } from '@reduxjs/toolkit';


interface ShoppingCart {
  [key: string]: {
    title: string,
    author: string,
    count: number
  }
};

export interface IState {
  shoppingCart: ShoppingCart;
  quantiti: number
};

const initialState: IState = {
  shoppingCart: {},
  quantiti: 0
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const id = action.payload.id;

      // if (state.shoppingCart[id]) {
      //   state.shoppingCart[id] = {
      //     ...state.shoppingCart[id],
      //     count: state.shoppingCart[id].count + 1
      //   }
      // } else {
      state.shoppingCart[id] = {
        ...action.payload,
        count: 1
        // }
      }
      state.quantiti = state.quantiti + 1


    }
  }
});

export const { addToCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;