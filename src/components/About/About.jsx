import about_img from '@/assets/about.png'
import play_icon from '@/assets/play-icon.png'
import './About.css'
import { useState } from 'react'
import { VideoPlayer } from '..'

export const About = () => {
    
    const [showVideo, setShowVideo] = useState(false);


    const handlePlayClick = () => {
        setShowVideo(true)
    }

    return (
        <>
            <section className="about">
                <div className="about__left">
                    <img src={about_img} alt="" className='about__left-img' />
                    <img src={play_icon} alt="" className='about__left-icon' onClick={handlePlayClick} />
                </div>
                <div className="about__right">
                    <h3 className='about__right-subtitle'>Sobre la Universidad</h3>
                    <h2 className='about__right-title' >Formar hoy a los líderes del mañana</h2>
                    <p className='about__right-description'>Embárquese en un viaje educativo transformador con los programas educativos integrales de nuestra universidad. Nuestro plan de estudios de vanguardia está diseñado para capacitar a los estudiantes con el conocimiento, las habilidades y las experiencias necesarias para sobresalir en el dinámico campo de la educación.</p>
                    <p className='about__right-description'>Con un enfoque en la innovación, el aprendizaje práctico y la tutoría personalizada, nuestros programas preparan a los aspirantes a educadores para lograr un impacto significativo en las aulas, las escuelas y las comunidades.</p>
                    <p className='about__right-description'>Ya sea que aspire a convertirse en maestro, administrador, consejero o líder educativo, nuestra diversa gama de programas ofrece el camino perfecto para lograr sus objetivos y desbloquear todo su potencial para dar forma al futuro de la educación.</p>
                </div>
                
            </section>
            <VideoPlayer playState={showVideo} setPlayState={setShowVideo}/>
        </>
    )
}
