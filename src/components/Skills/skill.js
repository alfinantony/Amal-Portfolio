import React from 'react';
import './skill.css';
import Leed from '../../assets/leedslogo.png';

const Skill = () => {
  return (
    <section id='skill'>
      <div className="skillContent">
        <h1 className="skillTitle">What I Do</h1>
        <p className="skillDesc">
          As an artist, my work involves creating and showcasing art that communicates emotions and ideas. Whether through visual arts or performance, I strive to bring unique perspectives and creativity to every project.
        </p>
        <div className="skillBars">
          <div className="skillBar">
            <img src={Leed} alt="Leeds Arts University" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Leeds Arts University</h2>
              <p>Ranked 5th in the UK for Art and Design by the 2025 Complete University Guide, showcasing our exceptional performance and commitment to excellence in the arts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
