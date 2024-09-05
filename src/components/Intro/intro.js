import React from 'react';
import './intro.css';
import bg from '../../assets/bg.jpg'; // Background image
import artistImg from '../../assets/artistimage.jpeg'; // Artist's image

const Intro = () => {
  return (
    <section id="intro">
      <div className="backgroundContainer">
        <img src={bg} alt="Background" className="backgroundImage" />
      </div>
      <div className="overlay"></div>
      <div className="introContent">
        <div className="artistImageContainer">
          <img src={artistImg} alt="Artist" className="artistImage" />
        </div>
        <h1 className="greeting">Welcome,</h1>
        <h2 className="artistName">I’m <span className="highlight">Amal</span>, an Artist</h2>
        <p className="description">Capturing moments through art, creating stories that resonate.</p>
      </div>
    </section>
  );
};

export default Intro;
