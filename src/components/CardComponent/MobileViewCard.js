// Common imports ---
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

// Style imports ---
import "../../styles/MobileView/MobileViewCard.css";

// Component imports ---
import MobileFrontView from "../MobileView/MobileFrontView";
import MobileRearView from "../MobileView/MobileRearView";

// Assets imports ---

const MobileViewCard = () => {

    const [flip, setFlip] = useState(false);

    const flipCard = () => {
        setFlip(!flip);
    }

    return (
        <>
            <div>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal" flipSpeedFrontToBack={0.7} flipSpeedBackToFront={0.7}>
                    <MobileFrontView flipToBack = {() => flipCard()} />
                    <MobileRearView flipToFront = {() => flipCard()} />
                </ReactCardFlip>
            </div>
        </>
    );
}

export default MobileViewCard;