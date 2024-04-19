import React from 'react'
import './Hero.css'
import dark_arrow from '@/assets/dark-arrow.png'

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__text">
                <h1 className="hero__text-title">Garantizamos una mejor educación para un mundo mejor</h1>
                <p className="hero__text-description">
                    Nuestro plan de estudios de vanguardia está diseñado para capacitar a los estudiantes con el conocimiento, las habilidades y las experiencias necesarias para sobresalir en el dinámico campo de la educación.
                </p>
                <button className="hero__btn">Explora más <img className='hero__btn-img' src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}
