import logo from '@/assets/logo.png'
import { useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '@/assets/menu-icon.png'
import {Link} from 'react-scroll'

export const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 70 ? setSticky(true) : setSticky(false);
    })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`navbar ${sticky ? 'navbar__sticky' : ''}`}>
      <img className='navbar__logo' src={logo} alt="" />
      <ul className={`navbar__menu ${mobileMenu? '': 'hide-mobile-menu'}`}>
        <li className='navbar__item'><Link to='hero' smooth={true} offset={0} duration={500} className='navbar__item-link' >Home</Link></li>
        <li className='navbar__item'><Link to='programs' smooth={true} offset={-260} duration={500}  className='navbar__item-link' >Program</Link></li>
        <li className='navbar__item'><Link to='about' smooth={true} offset={-150} duration={500} className='navbar__item-link' >About US</Link></li>
        <li className='navbar__item'><Link to='campus' smooth={true} offset={-260} duration={500} className='navbar__item-link' >Campus</Link></li>
        <li className='navbar__item'><Link to='testimonials' smooth={true} offset={-260} duration={500} className='navbar__item-link' >Testimonials</Link></li>
        <li className='navbar__item'><Link to='contact' smooth={true} offset={-260} duration={500} type='button' className='navbar__item-link navbar__item-btn' >Contact US</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='navbar__icon-menu' onClick={toggleMenu} />
    </nav>
  )
}
