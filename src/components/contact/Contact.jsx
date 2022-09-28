import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
 const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_42sx6hn', ' template_zfxcaqn', form.current, 'siNG_4WOxRTUb7M3o')

      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:dummyemail@gmail.com">Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>https://www.messenger.com/</h5>
            <a href="https://www.messenger.com/">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>Whats App</h4>
            <h5>+123456789</h5>
            <a href="https://www.whatsapp.com/">Send a message</a>
          </article>
          
        </div>
        {/* End of contact_options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact