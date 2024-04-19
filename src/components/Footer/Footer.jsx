import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>&copy; 2024 Edusity. Todos los derechos reservados</p>
      <ul className='footer__info'>
        <li className='footer__info-item'><a className='footer__info-link' href="">Terms of Services</a></li>
        <li className='footer__info-item'><a className='footer__info-link' href="">Privacy Policy</a></li>
      </ul>
    </footer>
  )
}
