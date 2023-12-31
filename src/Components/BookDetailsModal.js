import React from "react";
import Modal from "./UtilityComponents/Modal";
import "./BookDetailsModal.css"

const BookDetailsModal = ({handleClose, open, buttonText}) => {
    
    return(
        <Modal isOpen={open} >
            <div className="modalInnerSection">
                <form className="bookForm">
                    <label>
                        Book Name:
                        <input type="text" />
                    </label>
                    <label>
                        Book Category:
                        <input type="text"/>
                    </label>
                    <label>
                        Price:
                        <input type="number"/>
                    </label>
                    <label>
                        Description:
                        <input type="text"/>
                    </label>
                </form>
                <div className="modalActionButtons">
                    <button onClick={handleClose}>Cancel</button>
                    <button>{buttonText}</button>
                </div>
            </div>
        </Modal>
    )
}

export default BookDetailsModal