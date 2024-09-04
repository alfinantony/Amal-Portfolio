import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import contactImg from '../../assets/contactemail.jpeg';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.jpg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='gallery' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Gallery</Link>
        <Link activeClass='active' to='exhibition' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Exhibition</Link>
      </div>

      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="Contact" className="desktopMenuImg"/> Contact Me
      </button>

      <img src={menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='gallery' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Gallery</Link>
        <Link activeClass='active' to='exhibition' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Exhibition</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
