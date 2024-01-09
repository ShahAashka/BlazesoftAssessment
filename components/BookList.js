import React from "react";
import BookItem from "./BookItem";
import Header from "./Header";
import styles from "../styles/index.module.css"
import { useSelector } from "react-redux";

        
const BookList = () => {
    const books = useSelector((state) => {
        return state;
    })
    return(
        <>
            <Header />
            <div className={styles.bookList}>
            {books && books.length ?
                <table className={styles.rowStyle}>
                    <thead className={styles.tableHead}>
                        <tr className={styles.headingRow}>
                            <th className={styles.bookNameHead}>Book Name</th>
                            <th className={styles.bookCategoryHead}>Book Category</th>
                            <th className={styles.bookPriceHead}>Book Price</th>
                            <th className={styles.deleteBookHead}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((bookItem) => {
                            return(
                                <BookItem 
                                    key={bookItem.id}
                                    id={bookItem.id}
                                    name={bookItem.name}
                                    category={bookItem.category}
                                    price={bookItem.price}
                                    description={bookItem.description}
                                />
                            )
                        })}
                    </tbody>
                </table>
            :
            <h3>Please add books using the Add Book button above</h3>
            }
            </div>
        </>
    )
}

export default BookList;