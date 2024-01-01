import React,{useState} from "react";
import Modal from "./UtilityComponents/Modal";
import "./BookDetailsModal.css"

const BookDetailsModal = ({handleClose, open, buttonText}) => {

    const [bookId, setBookId] = useState("")
    const [bookName, setBookName] = useState("");
    const [bookCategory, setBookCategory] = useState("");
    const [bookPrice, setBookPrice] = useState("");
    const [bookDescription, setBookDescription] = useState("");
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
        setBookName("");
        setBookCategory("");
        setBookPrice("");
        setBookDescription("");
        console.log("desc", bookDescription);
        console.log("name", bookName)
        console.log("category", bookCategory)
        console.log("price", bookPrice)
        console.log("desc", bookDescription);
        handleClose();
    }

    const handleSubmit = () => {
        console.log("name", bookName)
        console.log("category", bookCategory)
        console.log("price", bookPrice)
        console.log("desc", bookDescription);
       
        handleClose();
    }
    return(
        <Modal isOpen={open} >
            <div className="modalInnerSection">
                <form className="bookForm">
                    <label>
                        Book Name:
                        <input type="text" onChange={handleBookName}/>
                    </label>
                    <label>
                        Book Category:
                        <input type="text" onChange={handleBookCategory}/>
                    </label>
                    <label>
                        Price:
                        <input type="number" onChange={handleBookPrice}/>
                    </label>
                    <label>
                        Description:
                        <textarea name="bookDescription" rows={5} onChange={handleBookDescription}/>
                    </label>
                </form>
                <div className="modalActionButtons">
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleSubmit}>{buttonText}</button>
                </div>
            </div>
        </Modal>
    )
}

export default BookDetailsModal