import React from 'react'
import './Works.css'
import web1 from '../../assets/web1.png'
import web2 from '../../assets/web2.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className="workstitle">My Recent Work</h2>
        <div className="worksImgs">
            <a href="https://nomnom-aouo.onrender.com/" target='new'><img src={web1} alt="" className='worksImg'/></a>
        </div>
        <div className="worksImgs">
            <a href="https://shinytornado.github.io/taato/" target='new'><img src={web2} alt="" className='worksImg'/></a>
        </div>
    </section>
  )
}

export default Works
