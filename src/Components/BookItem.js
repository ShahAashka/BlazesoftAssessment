import React, {useState} from "react";
import Modal from "./UtilityComponents/Modal";
import "./BookItem.css"
import BookDetailsModal from "./BookDetailsModal";


const BookItem = () => {
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };
    return(
        <tr>
            <td onClick={handleOpen} className="bookName">Book Name</td>
            <td className="bookCategory">Book Category</td>
            <td className="bookPrice">Book Price</td>
            <td className="deleteBook">
                <button className="bookDeleteButton" onClick={() => {alert("clicked Delete")}}>Delete</button>
            </td>
            <BookDetailsModal 
                open={open}
                handleClose={handleClose}
                buttonText={"Update"}
            />
        </tr>
    )
}

export default BookItem;