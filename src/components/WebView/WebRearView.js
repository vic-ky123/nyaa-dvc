// Common imports ---
import React from 'react';
import { Link } from 'react-router-dom';

// Style imports ---
import "../../styles/WebView/WebRearView.css";

// Assets imports ---

const WebRearView = (props) => {

  return (
    <>
      <div>
        <h1>Web Rear View</h1>
        <button onClick={props.flipToFront}>flip front</button>
        <Link to="book-appointment">Book Appointment</Link>
      </div>
    </>
  );
}

export default WebRearView;