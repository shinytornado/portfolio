import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='contact'>
        <div className="contactTitle">SOCIALS</div>
        <div className="socialBar">
            <div className="socials">
            <a href='https://www.linkedin.com/in/shashankspothula/'target='new'><img src="https://www.svgrepo.com/show/506517/linkedin.svg" alt="" className="socialImg" /></a>
            </div>
            <div className="socials">
            <a href='https://github.com/shinytornado' target='new'><img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="" className="socialImg" /></a>
            </div>
            <div className="socials">
            <a href="https://www.upwork.com/freelancers/~0161e177de3a878c38" target='new'><img src="https://www.svgrepo.com/show/306914/upwork.svg" alt="" className="socialImg" /></a>
            </div>
        </div>
        <div className='sb2'>
            <div className='sb'>
                <img src="https://www.svgrepo.com/show/473621/gmail.svg" alt="" className='sbImg'/>
                shashankspothula@gmail.com
            </div>
            <div className='sb'>
                <img src="https://www.svgrepo.com/show/506463/discord.svg" alt="" className='sbImg'/>
                shinytornado
            </div>
        </div>
    </div>
  )
}

export default Contact
