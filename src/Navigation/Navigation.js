// Common imports ---
import React from "react";
import { Routes, Route } from "react-router-dom";

// Component imports ---
import Home from "../components/Home/Home";
import BookAppointment from "../components/BookAppointment/BookAppointment";
import ContactForm from "../components/ContactForm/ContactForm";
import SuccessScreen from "../components/FinalScreens/SuccessScreen";
import FailureScreen from "../components/FinalScreens/FailureScreen";

const Navigation = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/book-appointment" element={ <BookAppointment /> } />
                <Route path="/contact" element={ <ContactForm /> } />
                <Route path="/success" element={ <SuccessScreen /> } />
                <Route path="/failure" element={ <FailureScreen /> } />
            </Routes>
        </>
    )
}

export default Navigation;