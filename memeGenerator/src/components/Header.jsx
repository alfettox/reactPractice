import React from 'react';
import smileImage from '../../images/smile.png';


export default function Header() {
    return (
        <div className="header">
            <h1 className="header--title">Meme generator</h1>
            <img className="header--image" src={smileImage} alt="Smile" />
        </div>
    )
}

