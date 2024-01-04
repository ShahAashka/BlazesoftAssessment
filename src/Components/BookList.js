import React from "react";
import BookItem from "./BookItem";
import { deleteBook} from "../Redux/reducer";
import { connect } from "react-redux";
import Header from "./Header";
import "./BookList.css"

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
            {bookStore.length > 0 ?
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
                        {props.bookStore.map((bookItem, key) => {
                            return(
                                <BookItem 
                                    key={key}
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
            :
            <h3>Please add books using the Add Book button above</h3>
            }
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);