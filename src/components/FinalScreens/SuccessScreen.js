// Common imports ---
import React from "react";
import { useLocation } from "react-router";

// Style imports ---
import "../../styles/FinalScreens/SuccessScreen.css";

const SuccessScreen = () => {

    let passedData = useLocation();

    return (
        <>
            <div>
                <h1>Success Screen</h1>
                {
                    passedData.state ? <h5>{passedData.state.message}</h5> : null
                }
            </div>
        </>
    )
}

export default SuccessScreen;