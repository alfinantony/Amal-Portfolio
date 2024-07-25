import React from 'react'
import './intro.css'
import bg from '../../assets/artistimage.jpg'

const Intro = () => {
  return (
     <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <spam className="introText">I'am 
            <span className="introName">Amal</span> <br/> Artist
        </spam>
        <p className="introPara">I am a skilled Artist</p>
        
        </div>

        <img src={bg} alt="artisitimage" className="bg">
        </img>

     </section>
        
     
  )
}

export default Intro
