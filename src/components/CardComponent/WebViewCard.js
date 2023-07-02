// Common imports ---
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

// Style imports ---
import "../../styles/WebView/WebViewCard.css";

// Component imports ---
import WebFrontView from "../WebView/WebFrontView";
import WebRearView from "../WebView/WebRearView";

// Assets imports ---

const WebViewCard = () => {

    const [flip, setFlip] = useState(false);

    const flipCard = () => {
        setFlip(!flip);
    }

    return (
        <>
            <div>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal" flipSpeedFrontToBack={0.7} flipSpeedBackToFront={0.7}>
                    <WebFrontView flipToBack = {() => flipCard()} />
                    <WebRearView flipToFront = {() => flipCard()} />
                </ReactCardFlip>
            </div>
        </>
    );
}

export default WebViewCard;