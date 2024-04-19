import React from 'react'
import './Campus.css'
import gallery_1 from '@/assets/gallery-1.png'
import gallery_2 from '@/assets/gallery-2.png'
import gallery_3 from '@/assets/gallery-3.png'
import gallery_4 from '@/assets/gallery-4.png'
import { TitleBar } from '../TitleBar/TitleBar'
import white_arrow from '@/assets/white-arrow.png'

export const Campus = () => {

    return (
        <>
            <TitleBar subtitle='Galeria' title="Fotos del campus" />
            <section className='campus'>
                <div className="campus__gallery">
                    <img className='campus__gallery-img' src={gallery_1} alt="" />
                    <img className='campus__gallery-img' src={gallery_2} alt="" />
                    <img className='campus__gallery-img' src={gallery_3} alt="" />
                    <img className='campus__gallery-img' src={gallery_4} alt="" />
                </div>
                <button className='campus__btn'>ver más aquí <img className='campus__btn-icon' src={white_arrow} alt="" /></button>
            </section>
        </>
    )
}
