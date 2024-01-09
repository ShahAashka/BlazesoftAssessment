import React,{ useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../reducer";
import styles from "../styles/BookDetailsModal.module.css"


const BookDetailsModal = (props) => {
    const dispatch = useDispatch();
    const {handleClose, open, buttonText, bookDetails} = props;
    const [bookId, setBookId] = useState(bookDetails.id || "")
    const [bookName, setBookName] = useState(bookDetails.name || "");
    const [bookCategory, setBookCategory] = useState(bookDetails.category || "");
    const [bookPrice, setBookPrice] = useState(bookDetails.price || "")
    const [bookDescription, setBookDescription] = useState(bookDetails.description || "");

    const handleBookName = (e) => {
        setBookName(e.target.value)
    }
    const handleBookCategory = (e) => {
        setBookCategory(e.target.value)
    }

    const handleBookPrice = (e) => {
        setBookPrice(e.target.value)
    }

    const handleBookDescription = (e) => {
        setBookDescription(e.target.value)
    }
    const handleCancel = () => {
        handleClose();
    }

    const handleSubmit = () => {
        if(bookName == "" || bookCategory == "" || bookDescription == "" || bookPrice == ""){
            alert("Please do not leave any fields empty")
            return;
        }
        const id = Math.floor(Math.random() * 1000)
        setBookId(id)
        let bookItem = {
            id: id,
            name: bookName,
            category: bookCategory,
            price: bookPrice,
            description: bookDescription
        }
        dispatch(addBook(bookItem))
        handleClose();
    }
    const handleUpdate = () => {
        if(bookName == "" || bookCategory == "" || bookDescription == "" || bookPrice == ""){
            alert("Please do not leave any fields empty")
            return;
        }
        let bookItem = {
            id: bookId,
            name: bookName,
            category: bookCategory,
            price: bookPrice,
            description: bookDescription
        }
        dispatch(updateBook(bookItem))
        handleClose();
    }
    return(
        <Modal isOpen={open} >
            <div className={styles.modalInnerSection}>
                <form className={styles.bookForm}>
                    <label htmlFor="bookName">Book Name:</label>
                    <input className={styles.bookName} id="bookName" defaultValue={bookName} type="text" onChange={handleBookName}/>
                    
                    <label htmlFor="bookCategory">Book Category:</label>
                    <input className={styles.bookCategory} id="bookCategory" defaultValue={bookCategory} type="text" onChange={handleBookCategory}/>
                    
                    <label htmlFor="bookPrice">Price:</label>
                    <input className={styles.bookPrice} id="bookPrice" defaultValue={bookPrice} type="number" onChange={handleBookPrice}/>
                    
                    <label htmlFor="bookDescription">Description:</label>
                    <textarea className={styles.bookDescription} id="bookDescription" defaultValue={bookDescription} name="bookDescription" rows={5} onChange={handleBookDescription}/>
                </form>
                <div className={styles.modalActionButtons}>
                    <button className={styles.cancelAction} onClick={handleCancel}>Cancel</button>
                    <button className={styles.submitAction} onClick={buttonText == "Submit" ? handleSubmit : handleUpdate}>{buttonText}</button>
                </div>
            </div>
        </Modal>
    )
}

export default BookDetailsModal;