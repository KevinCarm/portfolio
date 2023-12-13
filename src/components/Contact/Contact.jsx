import 'bulma/css/bulma.css'; 

import emailjs from '@emailjs/browser';
import {useRef, useState} from 'react';
import style from './contact.module.css';
import Notification from "./Notification.jsx";

const Contact = () => {
    const form = useRef();
    const [showNotification, setShowNotification] = useState(false);
    const userNameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");
    const [isUserNameError, setIsUserNameError] = useState(false);
    const[isEmailError, setIsEmailError] = useState(false);
    const [isMessageError, setIsMessageError] = useState(false);
    const [messageNotificacion, setMessageNotificacion] = useState({});
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        
        setIsUserNameError(userNameRef.current.value === '');
        setIsEmailError(emailRef.current.value === '');
        setIsMessageError(messageRef.current.value === '');
        setIsSending(true);
        
        if(userNameRef.current.value === '' || emailRef.current.value === '' || messageRef.current.value === '') {
            setMessageNotificacion({
                message: "Los campos no deben estar vacíos",
                style: "notification is-danger"
            })
            setIsSending(false)
            setShowNotification(true);
        } else {
            emailjs.sendForm('service_4eqp0py', 'template_5ulqaoc', form.current, 'FaePa9gFHMslQCvfH')
              .then(() => {
                  setIsSending(false)
                  setMessageNotificacion({
                      message: "Gracias por tu mensaje, me pondré en contacto lo mas rápido posible",
                      style: "notification is-success"
                  })
                  setShowNotification(true);
                  }, (error) => {
                      setIsSending(false)
                      setMessageNotificacion({
                          message: `Hubo un error al enviar tu mensaje, intenta de nuevo ${error.text}`,
                          style: "notification is-danger"
                      })
              });
            setIsSending(false)
        }
    };
    
    const closeNotificationClickEvent = () => {
        setShowNotification(false);
    }
    
    const userNameStyle = !isUserNameError ? "input" : "input is-danger";
    const emailStyle = !isEmailError ? "input" : "input is-danger";
    const messageStyle = !isMessageError ? "textarea" : "textarea is-danger";
    const buttonStyle = !isSending ? `button is-success ${style.button}` : `button is-success is-loading ${style.button}`
    
    return <>
    <br/>
    {!showNotification ? null : <Notification closeNotification={closeNotificationClickEvent} message={messageNotificacion}/>}
    
    <form ref={form} onSubmit={sendEmail}>
        <div className={style.container}>
            <div className={style.container_form}>
                <h1 className="title">Contacto</h1>
                <div className="field">
                    <div className="control">
                        <input name="user_name" ref={userNameRef} className={userNameStyle} type="text" placeholder="Tu nombre" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input name="user_email" ref={emailRef} className={emailStyle} type="email" placeholder="Tu email" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <textarea className={messageStyle} ref={messageRef} name="message" id="" cols="20" rows="10" placeholder="Escribe tu mensaje"></textarea>
                    </div>
                </div>
                <div className={style.button_container}>
                    <button className={buttonStyle}>Enviar</button>
                </div>
            </div>
        </div>
    </form>
    </>
};

export default Contact;