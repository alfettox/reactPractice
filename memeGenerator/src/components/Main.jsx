import React, { useState, useEffect } from 'react';
import memesData from "../memesData.js"


/*
   PROPS: properties passed into a component as parameters in a function, the component cant modify them
   STATE: defined within the component and are managed by the component 
*/

export default function Main() {

  const [personalInfo, setPersonalInfo] = React.useState({
    firstName: "Giovanni",
    lastName: "De Franceschi",
    phone: "514 156 156",
    isFavorite: true
  })

  const [allMemes, setAllMemes] = useState([]);
  const [imageFilter, setImageFilter] = useState(''); //HOOK
  const [thisState, setThisState] = useState("YES");
  var [interactionCounter, setInteractionCounter] = useState(0);
  const [isFavorite, setIsFavorite] = useState(true);

  let starIcon = isFavorite ? "star-filled.png" : "star-empty.png"


  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMeme, setAllMeme] = useState([])

  useEffect ( ()=> {
    async function getMemes() {
      const res = await fetch("http://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  },[])

  function getMemeImage(){
    const randomNumber = Math.floor(Math.random()*allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({ ...prevMeme, randomImage: url}))
  }

  function handleChange2(event){
    const {name,value} = event.target
    setMeme( prevMeme => ( {...prevMeme, [name]: value })  )
  }









  function add() {
    setInteractionCounter(interactionCounter => interactionCounter + 1)
  }

  function handleClick(event) {
    event.preventDefault();
    const input1 = event.target.elements.inputName1.value;
    const input2 = event.target.elements.inputName2.value;



    console.log(input1);
    console.log(input2);

    getImage()

    changeThisState()
    add()

  }

  function changeThisState() {
    setThisState((thisState == "YES") ? "NO" : "YES");
    console.log(thisState)
  }

  function getImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    console.log(memesArray);
    var url = memesArray[randomNumber].url
    console.log(url)
  }

  function handleOnMouseOver(event) {
    setImageFilter(imageFilter === 'grayscale(100%)' ? '' : 'grayscale(100%)');
  }


  function handleStarClick(event) {
    console.log(personalInfo)
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,      //keep old value if not provided, SPREAD OPERATOR
      lastName: "Not me",
      phone: "514 323 332",
      isFavorite: false,
    }));
    console.log(personalInfo)
    setIsFavorite(isFavorite => !isFavorite)
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

      <div>{interactionCounter}</div>
      <img className="main--star" src={`../../images/${starIcon}`} onClick={handleStarClick}></img>
    
      <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange2}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange2}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    
    </div>
  );
}
