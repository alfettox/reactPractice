import React, { useState } from 'react';
import "./meme.css";
import memesData from './memesData.js';

export default function Meme() {
    const [url, setUrl] = useState('');

    const handleForm = (e) => {
        e.preventDefault();

        console.log("CLICKED");

        let rand = Math.floor(Math.random() * memesData.data.memes.length);

        console.log(rand);
        console.log(memesData.data.memes[rand]);

        setUrl(memesData.data.memes[rand].url);
    };

    return (
        <>
            <img src={url} className="meme--image" alt="meme" />
            <form>
                <input type="text" placeholder="input 1" />
                <input type="text" placeholder="input 2" />
                <button onClick={handleForm}>GET IMAGE</button>
            </form>
        </>
    );
}
