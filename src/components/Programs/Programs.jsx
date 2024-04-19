import program_1 from '@/assets/program-1.png'
import program_2 from '@/assets/program-2.png'
import program_3 from '@/assets/program-3.png'
import './Programs.css'
import program_icon_1 from '@/assets/program-icon-1.png'
import program_icon_2 from '@/assets/program-icon-2.png'
import program_icon_3 from '@/assets/program-icon-3.png'
import { TitleBar } from '../TitleBar/TitleBar'


export const Programs = () => {
  return (
    <>
      <TitleBar subtitle="Nuestro programa" title="Lo que ofrecemos" />
      <section className="programs">

        <div className="programs__program">
          <img className='programs__program-img' src={program_1} alt="" />
          <div className="programs__caption">
            <img className='programs__caption-img' src={program_icon_1} alt="" />
            <p className='programs__caption-text'>Diploma de graduación</p>
          </div>
        </div>
        <div className="programs__program">
          <img className='programs__program-img' src={program_2} alt="" />
          <div className="programs__caption">
            <img className='programs__caption-img' src={program_icon_1} alt="" />
            <p className='programs__caption-text'>Maestría</p>
          </div>
        </div>
        <div className="programs__program">
          <img className='programs__program-img' src={program_3} alt="" />
          <div className="programs__caption">
            <img className='programs__caption-img' src={program_icon_1} alt="" />
            <p className='programs__caption-text'>Posgraduación</p>
          </div>
        </div>
      </section>
    </>
  )
}
