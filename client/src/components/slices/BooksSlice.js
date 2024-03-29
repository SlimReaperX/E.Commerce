import { createSlice } from "@reduxjs/toolkit";
import { BookApi } from "../api/BookApi";

const BooksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    book: null,
    loading: false,
    error: null,
    searchQuery: "",
  },
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
    setBook(state, action) {
      state.book = action.payload;
    },
    clearBook(state) {
      state.book = null;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    clearSearchQuery(state) {
      state.searchQuery = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      BookApi.endpoints.getAllBooks.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          books: payload, 
          loading: false,
          error: null,
        };
      }
    );
  },
});

export const {
  setBooks,
  setBook,
  clearBook,
  setSearchQuery,
  clearSearchQuery,
} = BooksSlice.actions;
export const selectSearchQuery = (state) => state.books.searchQuery;
// export const selectBook = (state) => state.books.book;
export default BooksSlice.reducer;
