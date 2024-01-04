import React,{ useState } from "react";
import Modal from "./UtilityComponents/Modal";
import "./BookDetailsModal.css"
import { connect } from "react-redux";
import { addBook, updateBook } from "../Redux/reducer";

const mapStateToProps = (state) => {
    return {
        bookStore: state,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (obj) => dispatch(addBook(obj)),
        updateBook: (obj) => dispatch(updateBook(obj)),
    };
};

const BookDetailsModal = (props) => {
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
        if(bookName === "" || bookCategory === "" || bookDescription === "" || bookPrice === ""){
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
        props.addBook(bookItem)
        handleClose();
    }
    const handleUpdate = () => {
        if(bookName === "" || bookCategory === "" || bookDescription === "" || bookPrice === ""){
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
        props.updateBook(bookItem)
        handleClose();
    }
    return(
        <Modal isOpen={open} >
            <div className="modalInnerSection">
                <form className="bookForm">
                    <label>Book Name:</label>
                    <input id="bookName" defaultValue={bookName} type="text" onChange={handleBookName}/>
                    
                    <label>Book Category:</label>
                    <input id="bookCategory" defaultValue={bookCategory} type="text" onChange={handleBookCategory}/>
                    
                    <label>Price:</label>
                    <input id="bookPrice" defaultValue={bookPrice} type="number" onChange={handleBookPrice}/>
                    
                    <label>Description:</label>
                    <textarea id="bookDescription" defaultValue={bookDescription} name="bookDescription" rows={5} onChange={handleBookDescription}/>
                </form>
                <div className="modalActionButtons">
                    <button className="cancelAction" onClick={handleCancel}>Cancel</button>
                    <button className="submitAction" onClick={buttonText == "Submit" ? handleSubmit : handleUpdate}>{buttonText}</button>
                </div>
            </div>
        </Modal>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsModal);;