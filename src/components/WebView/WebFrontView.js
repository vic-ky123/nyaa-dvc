// Common imports ---
import React from "react";
import { Link } from "react-router-dom";

// Style imports ---
import "../../styles/WebView/WebFrontView.css";

// Assets imports ---

const WebFrontView = (props) => {
  return (
    <>
      <div className="web-front-view-container">
        {/* <div className="web-front-view-primary-bg"> */}
          {/* <div className="web-front-view-secondary-bg"> */}
            <div className="web-front-view-bg-holder">
              <div className="web-front-view-logo-part">
                <h1>front view web</h1>
                <button onClick={props.flipToBack}>flip back</button>
              </div>
              <div className="web-front-view-details-part">
                <h2>button section</h2>
                <Link to="contact">Contact</Link>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default WebFrontView;
