import React,{useState} from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll'

const NavBar = () => {

  const [showMenu, setshowMenu] = useState(false);

  return (
      <nav className="navbar">
        <img src={logo} alt='logo' className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-47} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-45} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='certify' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Certifications</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
            <img src={contact} alt="contact" className="desktopMenuImg"/> Contact Me </button>

            <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setshowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-47} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-45} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='certify' spy={true} smooth={true} offset={-40} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Certifications</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Contact</Link>
        </div>

      </nav>
  )
}

export default NavBar
