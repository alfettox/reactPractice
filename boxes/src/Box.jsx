import React from "react";
import './box.css';

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#00ff00" : "#ff0000",
    };

    return (
        <div
            style={styles}
            className="box"
            onClick={props.toggle}
        ></div>
    );
}
