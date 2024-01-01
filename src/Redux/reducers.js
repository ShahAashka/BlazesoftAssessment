import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const bookReducer = createSlice({
    name: 'bookStore',
    initialState,
    reducers: {
        //adding new book
        addBook: (state, action) => {
            state.push(action.payload)
            return state
        },
        //delete book
        deleteBook: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        //updateBookDetails
        updateBook: (state, action) => {
            return state.map((book) => {
                if(book.id == action.payload.id){
                    return{
                        ...book,
                        name: action.payload.name,
                        category: action.payload.category,
                        price: action.payload.price,
                        description: action.payload.description,
                    }
                }
                return book
            })
        }
    }
})

export const { addBook, deleteBook, updateBook } = bookReducer.actions;
export const reducers = bookReducer.reducer;