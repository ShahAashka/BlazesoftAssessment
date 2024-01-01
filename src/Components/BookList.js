import React from "react";
import BookItem from "./BookItem";
import "./BookList.css"
import Header from "./Header";
import { deleteBook} from "../redux/reducers";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {  
        bookStore: state,  
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        deleteBook: (id) => dispatch(deleteBook(id))
    }
}

const BookList = (props) => {
    const { bookStore } = props;
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
                        {bookStore.length > 0 &&
                        props.bookStore.map((bookItem, key) => {
                            return(
                                <BookItem 
                                    id={bookItem.id}
                                    name={bookItem.name}
                                    category={bookItem.category}
                                    price={bookItem.price}
                                    description={bookItem.description}
                                    deleteBook={props.deleteBook}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default connect (mapStateToProps, mapDispatchToProps)(BookList);