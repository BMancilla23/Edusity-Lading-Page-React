import { TitleBar } from '../TitleBar/TitleBar'
import React from 'react'
import './Contact.css'
import msg_icon from '@/assets/msg-icon.png'
import mail_icon from '@/assets/mail-icon.png'
import phone_icon from '@/assets/phone-icon.png'
import location_icon from '@/assets/location-icon.png'
import white_arrow from '@/assets/white-arrow.png'

export const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0a5961ea-0078-4350-b679-c2e1c93b7ce9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Formulario enviado exitosamente");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }
    return (
        <>
            <TitleBar subtitle="Contáctenos" title="Ponerse en contacto" />
            <section className='contact'>
                <div className="contact__col">
                    <h3 className="contact__col-title">Mandanos un mensaje<img className='contact__col-icon' src={msg_icon} alt="" /></h3>
                    <p className="contact__col-description">
                        No dude en comunicarse a través del formulario de contacto o busque nuestra información de contacto a continuación. Sus comentarios, preguntas y sugerencias son importantes para nosotros mientras nos esforzamos por brindar un servicio excepcional a nuestra comunidad universitaria.
                    </p>
                    <ul className='contact__col-info'>
                        <li className='contact__col-item'><img className='contact__item-icon' src={mail_icon} alt="" /> Contact@GreatStack.dev</li>
                        <li className='contact__col-item'><img className='contact__item-icon' src={phone_icon} alt="" /> +1 123-456-7890</li>
                        <li className='contact__col-item'><img className='contact__item-icon' src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge <br />MA 02139, United States</li>
                    </ul>
                </div>
                <div className="contact__col">
                    <form onSubmit={onSubmit} className='contact__form'>
                        <label className='contact__form-label' htmlFor="name">Tu nombre</label>
                        <input className='contact__form-input' type="text" id='name' name='name' placeholder='Coloca tu nombre' required />
                        <label className='contact__form-label' htmlFor="phone">Phone Number</label>
                        <input className='contact__form-input' type="tel" id='phone' name='phone' placeholder='Coloca tu número' />
                        <label className='contact__form-label' htmlFor="message">Escribe tus mensajes aquí</label>
                        <textarea className='contact__form-input contact__form-textarea' name="message" id="message" cols="30" rows="6" placeholder='Coloca tu mensaje'></textarea>
                        <button type='submit' className='contact__form-btn'>Enviar ahora <img className='contact__form-icon' src={white_arrow} alt="" /></button>
                    </form>
                    <span className='contact__col-loading'>{result}</span>
                </div>
            </section>
        </>
    )
}
