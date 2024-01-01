import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", name: "SOLID Principles", category: "Tehcnology", price: "99", description: "SOLID principles of design"},
    {id: "2", name: "Harry Potter", category: "Fiction", price: "799", description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling."},
    {id: "3", name: "Pride and Prejudice", category: "Science Fiction", price: "129", description: "Pride and Prejudice is the second novel by English author Jane Austen, published in 1813."},
    {id: "4", name: "The Girl with the Dragon Tattoo", category: "Psychological Thriller", price: "39", description: "The Girl with the Dragon Tattoo is the first book of the Millennium series."},
]

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