import React, {useState} from "react";
import "./BookItem.css"
import BookDetailsModal from "./BookDetailsModal";


const BookItem = (props) => {
    const { deleteBook, id, name, category, price, description } = props
    const [open, setOpen] = useState(false);
    const [bookDetails, setBookDetails] = useState("");
    
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
        deleteBook(id)
    }
    return(
        <tr>
            <td onClick={handleOpen} className="bookName">{name}</td>
            <td className="bookCategory">{category}</td>
            <td className="bookPrice">{`${"$"+price}`}</td>
            <td className="deleteBook">
                <button className="bookDeleteButton" onClick={handleDeleteBook}>Delete</button>
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