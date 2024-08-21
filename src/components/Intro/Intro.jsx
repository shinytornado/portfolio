import React from 'react'
import './Intro.css'
import bg from '../../assets/image.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Shashank</span><br />Full Stack Developer</span>
        <p className="introPara">As a passionate Full-Stack Developer, I specialize in creating <br/> dynamic and responsive web applications.</p>
        <a href='https://drive.google.com/file/d/10h1oWrPZUWxKiz862QDD8ffB5PINnYTq/view?usp=sharing' target='new' className="btn">RESUME</a>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
