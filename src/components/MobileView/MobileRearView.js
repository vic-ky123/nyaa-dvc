// Common imports ---
import React from 'react';
import { Link } from 'react-router-dom';

// Style imports ---
import "../../styles/MobileView/MobileRearView.css";

// Assets imports ---

const MobileRearView = (props) => {

  return (
    <>
      <div>
        <h1>Mobile Rear View</h1>
        <button onClick={props.flipToFront}>flip front</button>
        <Link to="book-appointment">book appointment</Link>
      </div>
    </>
  );
}

export default MobileRearView;