import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
  'products/fetchApi',
  async function () {
    const response = await fetch(
      'https://bookcrossingapi.herokuapp.com/api/v1/books');
    const data = await response.json();
    return data;
  }
);

interface IState {
  list: [],
  status: string,
  error: string
}

const initialState: IState = {
  list: [],
  status: '',
  error: ''
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
      state.error = '';
    }),
      builder.addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.list = action.payload.items;
        state.error = '';
      }),
      builder.addCase(fetchBooks.rejected, (state) => {
        state.status = 'error';
      })
  },
});


export default booksSlice.reducer;
