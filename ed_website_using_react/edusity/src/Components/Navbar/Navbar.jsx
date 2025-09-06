import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu_icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(prev => !prev);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500} onClick={closeMenu}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500} onClick={closeMenu}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500} onClick={closeMenu}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={closeMenu}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn" onClick={closeMenu}>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
