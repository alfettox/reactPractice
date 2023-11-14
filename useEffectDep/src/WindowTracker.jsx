import React, { useState, useEffect } from "react";

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        console.log(windowWidth + " " + windowHeight);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            console.log("Cleaning up...")
            window.removeEventListener("resize", handleResize);
        };
    }, []); //[] dependencies, return is the cleanup function

    return (
        <div>
            <h1>Window width: {windowWidth}</h1>
            <h1>Window height: {windowHeight}</h1>
        </div>
    );
}

