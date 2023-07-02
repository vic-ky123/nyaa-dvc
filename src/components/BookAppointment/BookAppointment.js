// Common imports ---
import React from "react";
import { Link } from "react-router-dom";

// Style imports ---
import "../../styles/BookAppointment/BookAppointment.css";

// Assets imports ---

const BookAppointment = () => {

    return (
        <>
            <div>
                <h1>Book Appointment</h1>
                <Link to="/">Back</Link>
            </div>
        </>
    )
}

export default BookAppointment;