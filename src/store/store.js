import { configureStore } from "@reduxjs/toolkit";
import booksSlice from './books/reducer'
import modalSlice from './modal/reducer'
import shoppingCartSlice from './shoppigCart/reducer';

export const store = configureStore({
  reducer: {
    booksList: booksSlice,
    modalWindow: modalSlice,
    shoppingCart: shoppingCartSlice
  },
});
