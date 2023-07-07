// Common imports ---
import React from "react";
import { Link } from "react-router-dom";

// Style imports ---
import "../../styles/WebView/WebRearView.css";

// Assets imports ---

const WebRearView = (props) => {
  return (
    <>
      <div className="web-rear-view-container">
        {/* <div className="web-rear-view-bg"> */}
          <div className="web-rear-view-bg-holder">
            <div className="web-rear-view-logo-part">
              <h1>rear view web</h1>
              <button onClick={props.flipToFront}>flip front</button>
            </div>
            <div>
              <h2>button section</h2>
              <Link to="contact">Contact</Link>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default WebRearView;
