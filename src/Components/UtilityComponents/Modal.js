import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
 
    return (
        <div
            onClick={onClose && onClose}
            className="modalOuterSection"
        >
            {children}
        </div>
    );
};

export default Modal