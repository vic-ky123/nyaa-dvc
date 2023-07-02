// Common imports ---
import React from "react";
import { useLocation } from "react-router";

// Style imports ---
import "../../styles/FinalScreens/FailureScreen.css";

const FailureScreen = () => {

    let passedData = useLocation();

    return (
        <>
            <div>
                <h1>Failure Screen</h1>
                {
                    passedData.state ? <h5>{passedData.state.message}</h5> : null
                }
            </div>
        </>
    )
}

export default FailureScreen;