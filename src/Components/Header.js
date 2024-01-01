import React, {useState} from "react";
import BookDetailsModal from "./BookDetailsModal";
import "./Header.css"


const Header = () => {
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };
    return(
        <div className="mainHeaderSection">
            <h2>Blazesoft Bookstore</h2>
            <button className="bookAddingButton" onClick={handleOpen}>Add book</button>
            <BookDetailsModal 
                open={open}
                handleClose={handleClose}
                buttonText={"Submit"}
            />
        </div>

    )
}

export default Header;