import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">SKILLS</span>
        {/* <span className="skillDesc">I am proficient in all the skills below</span> */}
        <div className="skillBars">
            <div className="skillBar">
                <img src="https://www.logo.wine/a/logo/C%2B%2B/C%2B%2B-Logo.wine.svg" alt="" className="skillBarImg" />
                <div className="skillBarText"><h2>C++</h2></div>
                <div className="skill-level">
                <div className="skill-percent" id='cpp'></div>
                </div>
                <div className="skill-percent-number">85%</div>
            </div>
            <div className="skillBar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="" className="skillBarImg" />
                <div className="skillBarText"><h2>HTML</h2></div>
                <div className="skill-level">
                <div className="skill-percent" id='html'></div>
                </div>
                <div className="skill-percent-number">90%</div>
            </div>
            <div className="skillBar">
                <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png" alt="" className="skillBarImg" />
                <div className="skillBarText"><h2>CSS</h2></div>
                <div className="skill-level">
                <div className="skill-percent" id='css'></div>
                </div>
                <div className="skill-percent-number">70%</div>
            </div>
            <div className="skillBar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" className="skillBarImg" />
                <div className="skillBarText"><h2>JAVA SCRIPT</h2></div>
                <div className="skill-level">
                <div className="skill-percent" id='js'></div>
                </div>
                <div className="skill-percent-number">75%</div>
            </div>
            <div className="skillBar">
                <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="" className="skillBarImg" />
                <div className="skillBarText"><h2>REACT</h2></div>
                <div className="skill-level">
                <div className="skill-percent" id='react'></div>
                </div>
                <div className="skill-percent-number">65%</div>
            </div>
            <div className="skillBar">
                <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" alt="" className="skillBarImg" />
                <div className="skillBarText"><h2>MONGODB</h2></div>
                <div className="skill-level">
                <div className="skill-percent" id='mongo'></div>
                </div>
                <div className="skill-percent-number">60%</div>
            </div>
        </div>
    </section>
  )
}

export default Skills
