import React, {useState} from "react";
import BookDetailsModal from "./BookDetailsModal";
import styles from "../styles/Header.module.css"


const Header = () => {
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };
    return(
        <div className={styles.mainHeaderSection}>
            <h2>Blazesoft Bookstore</h2>
            <button className={styles.bookAddingButton} onClick={handleOpen}>Add book</button>
            {open &&
                <BookDetailsModal 
                    open={open}
                    handleClose={handleClose}
                    buttonText={"Submit"}
                    bookDetails={""}
                />
            }
        </div>

    )
}

export default Header;