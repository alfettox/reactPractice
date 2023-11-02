import React, { useState } from 'react';
import memesData from "../memesData.js"


/*
   PROPS: properties passed into a component as parameters in a function, the component cant modify them
   STATE: defined within the component and are managed by the component 
*/

export default function Main() {
  const [imageFilter, setImageFilter] = useState('');

  function handleClick(event) {
    event.preventDefault();
    const input1 = event.target.elements.inputName1.value;
    const input2 = event.target.elements.inputName2.value;


    console.log(input1);
    console.log(input2);

    getImage()
    
  }

  function getImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random()*memesArray.length)
    console.log(memesArray);
    var url = memesArray[randomNumber].url
    console.log(url)
  }

  function handleOnMouseOver(event) {
    setImageFilter(imageFilter === 'grayscale(100%)' ? '' : 'grayscale(100%)');
  }

  return (
    <div className="main--container">
      <img
        src="../../images/smile.png"
        className="main--image"
        onMouseOver={handleOnMouseOver}
        style={{ filter: imageFilter }}
      />
      <form onSubmit={handleClick} className="main--form">
        <input type="text" name="inputName1" placeholder="Please enter the first parameter" />
        <input type="text" name="inputName2" placeholder="Please enter the second parameter" />
        <button type="submit">GET IMAGE</button>
      </form>
    </div>
  );
}
