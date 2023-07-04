// Common imports ---
import React from "react";
import { useMediaQuery } from 'react-responsive';

// Style imports ---
import "../../styles/Home.css";

// Component imports ---
import WebViewCard from '../CardComponent/WebViewCard';
import MobileViewCard from '../CardComponent/MobileViewCard';

const Home = () => {

    const isSmallScreen = useMediaQuery({ maxWidth: 319 })
    const isTabletOrMobile = useMediaQuery({ minWidth: 320, maxWidth: 768 });
    const isDesktop = useMediaQuery({ minWidth: 769, maxWidth: 1440 });
    const isLargeScreen = useMediaQuery({ minWidth: 1441 });

    return (
        <>
            <div className="home-main-container">
                {isSmallScreen &&
                    <>
                        <div>
                            <h1>Sorry for the inconvenince. This device is too small to view. Please switch to a large screen device.</h1>
                        </div>
                    </>
                }
                {isDesktop && <WebViewCard />}
                {isTabletOrMobile && <MobileViewCard />}
                {isLargeScreen &&
                    <>
                        <div>
                            <h1>Sorry for the inconvenince. This device is too large to view. Please switch to a small screen device.</h1>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default Home;