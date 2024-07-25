import React from 'react'
import './skill.css'
import Leed from '../../assets/leedslogo.png'

const Skill = () => {
  return (
    <div>
      <section id='skill'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art. The common usage in both everyday speech and academic discourse refers to a practitioner in the visual arts only. However, the term is also often used in the entertainment business, especially in a business context, for musicians and other performers (although less often for actors).</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Leed} alt="" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Leed Arts Univeristy</h2>
                        <p>We are proud of our performance in major league tables, including being ranked 5th in the UK for Art and Design in the 2025 Complete University Guide.</p>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Skill
