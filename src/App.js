// IMPORT useState
import {useState} from 'react'
import React from 'react';
import './styles.css';
import BigImage from './components/BigImage';
import SmallImage from './components/SmallImage';
//still need imagesArr for App due to state variable intial value
import imagesArr from './imageData'

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage] 
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img)
    // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
const handleClick = (img) =>{
  setBigImage(img)
}
const images = imagesArr.map((ele, idx) => {
    return (
      <SmallImage
        src={ele.img}
        key={idx}
        alt={ele.city}
        className={ele.img === bigImage ? 'thumb border' : 'thumb'}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images}
        </div>
        <BigImage
          bigImage={bigImage} />
      </div>
    </div>
  );
}
