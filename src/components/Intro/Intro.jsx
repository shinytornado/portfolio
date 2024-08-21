import React from 'react'
import './Intro.css'
import bg from '../../assets/image.png'
import btnimg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Shashank</span><br />Full Stack Developer</span>
        <p className="introPara">As a passionate Full-Stack Developer, I specialize in creating <br/> dynamic and responsive web applications.</p>
        <Link><button className="btn"><img src={btnimg} alt="Hire" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
