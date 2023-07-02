// Common imports ---
import React from 'react';
import { Link } from 'react-router-dom';

// Style imports ---
import "../../styles/MobileView/MobileFrontView.css";

// Assets imports ---

const MobileFrontView = (props) => {

  return (
    <>
      <div>
        <h1>Mobile Front View</h1>
        <button onClick={props.flipToBack}>flip back</button>
        <Link to="contact">Contact</Link>
      </div>
    </>
  );
}

export default MobileFrontView;