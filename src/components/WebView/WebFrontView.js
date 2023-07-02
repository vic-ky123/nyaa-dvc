// Common imports ---
import React from 'react';
import { Link } from 'react-router-dom';

// Style imports ---
import "../../styles/WebView/WebFrontView.css";

// Assets imports ---

const WebFrontView = (props) => {

  return (
    <>
      <div>
        <h1>Web Front View</h1>
        <button onClick={props.flipToBack}>flip back</button>
        <Link to="contact">Contact</Link>
      </div>
    </>
  );
}

export default WebFrontView;