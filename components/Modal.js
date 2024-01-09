import React from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
 
    return (
        <div
            onClick={onClose && onClose}
            className={styles.modalOuterSection}
        >
            {children}
        </div>
    );
};

export default Modal;