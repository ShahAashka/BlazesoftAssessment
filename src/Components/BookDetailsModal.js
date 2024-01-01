import React,{ useState, useEffect } from "react";
import Modal from "./UtilityComponents/Modal";
import "./BookDetailsModal.css"
import { connect } from "react-redux";
import { addBook, updateBook } from "../redux/reducers";

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
                    <label>
                        Book Name:
                        <input defaultValue={bookDetails.name || ""} type="text" onChange={handleBookName}/>
                    </label>
                    <label>
                        Book Category:
                        <input defaultValue={bookDetails.category || ""} type="text" onChange={handleBookCategory}/>
                    </label>
                    <label>
                        Price:
                        <input defaultValue={bookDetails.price || ""} type="number" onChange={handleBookPrice}/>
                    </label>
                    <label>
                        Description:
                        <textarea defaultValue={bookDetails.description || ""} name="bookDescription" rows={5} onChange={handleBookDescription}/>
                    </label>
                </form>
                <div className="modalActionButtons">
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={buttonText == "Submit" ? handleSubmit : handleUpdate}>{buttonText}</button>
                </div>
            </div>
        </Modal>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsModal);;