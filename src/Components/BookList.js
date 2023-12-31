import React from "react";
import BookItem from "./BookItem";
import "./BookList.css"
import Header from "./Header";

const BookList = () => {
    return(
        <>
            <Header />
            <div className="bookList">
                <table className="rowStyle">
                    <thead>
                        <tr className="headingRow">
                            <th className="bookNameHead">Book Name</th>
                            <th className="bookCategoryHead">Book Category</th>
                            <th className="bookPriceHead">Book Price</th>
                            <th className="deleteBookHead">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BookItem />
                        <BookItem />
                        <BookItem />
                        <BookItem />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BookList;