import React, {useState} from "react";
import { deleteBook } from "../reducer";
import { useDispatch } from "react-redux";
import BookDetailsModal from "./BookDetailsModal";
import styles from "../styles/BookItem.module.css"


const BookItem = (props) => {
    const { id, name, category, price, description } = props
    const [open, setOpen] = useState(false);
    const [bookDetails, setBookDetails] = useState("");
    
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        let bookObj = {
            id: id,
            name: name,
            category: category,
            price: price,
            description: description
        }
        setBookDetails(bookObj)
        setOpen(true);
    };

    const handleDeleteBook = () => {
        dispatch(deleteBook(id))
    }
    return(
        <tr>
            <td onClick={handleOpen} className={styles.bookName}>{name}</td>
            <td className={styles.bookCategory}>{category}</td>
            <td className={styles.bookPrice}>{`${"$"+price}`}</td>
            <td className={styles.deleteBook}>
                <button className={styles.bookDeleteButton} onClick={handleDeleteBook}>Delete</button>
            </td>
            {open &&
                <td>
                    <BookDetailsModal 
                        open={open}
                        handleClose={handleClose}
                        buttonText={"Update"}
                        bookDetails={bookDetails}
                    />
                </td>
            }
        </tr>
    )
}

export default BookItem;