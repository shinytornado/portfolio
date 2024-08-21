import React from 'react'
import './Certify.css'
import certi1 from '../../assets/certi1.png'

const Certify = () => {
  return (
    <section id="certify">
        <span className='certifyTitle'>CERTIFICATIONS</span>
        <div className="cert">
            <div className="certi">
                <a href="https://www.hackerrank.com/certificates/8a0b53dcb983" target='new'><img src={certi1} alt="" className='certiImg'/></a>
            </div>
            <div className="certiS">
                <a href="https://smartinterviews.in/certificate/4350e73c" target='new'><img src="https://imagedelivery.net/L-RRwTsGtjw4XmStu9Y7XA/ad79920b-6d97-48f7-a186-0772a0c95a00/public" alt="" className='certiImg'/></a>
            </div>
            <div className="certi">
                <a href="https://www.credly.com/badges/e97e498b-8175-48af-a044-f5bec548084f/public_url" target='new'><img src="https://images.credly.com/images/2f7b0627-48a0-4894-8d46-3245bdfe0463/image.png" alt="" className="certiImg" /></a>
            </div>
            <div className="certi">
                <a href="https://www.credly.com/badges/a23778b3-186e-496a-8c74-7886362034e2/public_url" target='new'><img src="https://images.credly.com/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png" alt="" className="certiImg" /></a>
            </div>
            <div className="certi">
                <a href="https://www.credly.com/badges/c79cdad4-a78b-4e98-b5f6-78718f1508fb/public_url" target='new'><img src="https://images.credly.com/images/357796f2-b9e9-4335-9707-0ca67c877ee5/image.png" alt="" className="certiImg" /></a>
            </div>
            <div className="certi">
                <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS101S4416138110168178" target='new'><img src="https://birdalliance.in/wp-content/uploads/NPTEL_Logo.jpg" alt="" className='certiImg'/></a>
            </div>
        </div>
    </section>
  )
}

export default Certify
