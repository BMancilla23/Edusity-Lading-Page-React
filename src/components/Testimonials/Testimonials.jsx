import { TitleBar } from '../TitleBar/TitleBar'
import './Testimonials.css'
import nextIcon from '@/assets/next-icon.png'
import backIcon from '@/assets/back-icon.png'
import user1Img from '@/assets/user-1.png'
import user2Img from '@/assets/user-2.png'
import user3Img from '@/assets/user-3.png'
import user4Img from '@/assets/user-4.png'
import { useRef } from 'react'

export const Testimonials = () => {

    const slider = useRef()
    let translateX = 0;

    const slideForward = () => {
        if (translateX > -50) {
            translateX -= 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`
    }

    const slideBackward = () => {
        if (translateX < 0) {
            translateX += 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`
    }

    return (
        <>
            <TitleBar subtitle='Testimonios' title='Lo que dice el estudiante' />
            <section className="testimonials">
                <img className='testimonials__next-btn' src={nextIcon} onClick={slideForward} alt="" />
                <img className='testimonials__back-btn' src={backIcon} onClick={slideBackward} alt="" />
                <div className="testimonials__slider">
                    <ul ref={slider} className='testimonials__slider-menu'>
                        <li className='testimonials__slider-item'>
                            <div className="testimonials__slide">
                                <div className="testimonials__slide-user">
                                    <img className='testimonials__slide-img' src={user1Img} alt="" />
                                    <div className='testimonials__slide-info'>
                                        <h3 className='testimonials__slide-name'>Willian Jackson</h3>
                                        <span className='testimonials__slide-location'>Edusity, USA</span>
                                    </div>
                                </div>
                                <p className="testimonials__slide-description">
                                    Elegir estudiar Educación en Educación fue una de las mejores decisiones que he tomado. La comunidad solidaria, las instalaciones de última generación y el compromiso con la excelencia académica realmente han superado mis expectativas.
                                </p>
                            </div>
                        </li>
                        <li className='testimonials__slider-item'>
                            <div className="testimonials__slide">
                                <div className="testimonials__slide-user">
                                    <img className='testimonials__slide-img' src={user2Img} alt="" />
                                    <div className='testimonials__slide-info'>
                                        <h3 className='testimonials__slide-name'>Willian Jackson</h3>
                                        <span className='testimonial__slide-location'>Edusity, USA</span>
                                    </div>
                                </div>
                                <p className="testimonials__slide-description">
                                    Elegir estudiar Educación en Educación fue una de las mejores decisiones que he tomado. La comunidad solidaria, las instalaciones de última generación y el compromiso con la excelencia académica realmente han superado mis expectativas.
                                </p>
                            </div>

                        </li>
                        <li className='testimonials__slider-item'>
                            <div className="testimonials__slide">
                                <div className="testimonials__slide-user">
                                    <img className='testimonials__slide-img' src={user3Img} alt="" />
                                    <div className='testimonials__slide-info'>
                                        <h3 className='testimonials__slide-name'>Willian Jackson</h3>
                                        <span className='testimonial__slide-location'>Edusity, USA</span>
                                    </div>
                                </div>
                                <p className="testimonials__slide-description">
                                    Elegir estudiar Educación en Educación fue una de las mejores decisiones que he tomado. La comunidad solidaria, las instalaciones de última generación y el compromiso con la excelencia académica realmente han superado mis expectativas.
                                </p>
                            </div>

                        </li>
                        <li className='testimonials__slider-item'>
                            <div className="testimonials__slide">
                                <div className="testimonials__slide-user">
                                    <img className='testimonials__slide-img' src={user4Img} alt="" />
                                    <div className='testimonials__slide-info'>
                                        <h3 className='testimonials__slide-name'>Willian Jackson</h3>
                                        <span className='testimonial__slide-location'>Edusity, USA</span>
                                    </div>
                                </div>
                                <p className="testimonials__slide-description">
                                    Elegir estudiar Educación en Educación fue una de las mejores decisiones que he tomado. La comunidad solidaria, las instalaciones de última generación y el compromiso con la excelencia académica realmente han superado mis expectativas.
                                </p>
                            </div>

                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

