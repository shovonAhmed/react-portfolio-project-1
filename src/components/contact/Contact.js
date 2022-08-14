import React, { useRef } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineMessage} from 'react-icons/ai'
import {TbBrandWhatsapp} from 'react-icons/tb'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wxx4kiu', 'template_p5pfdef', form.current, 'xwv0BNLWGJLGwfpFc')
    e.target.reset()
  }
  return (
    <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <HiOutlineMail className='contact__icon'/>
              <h4>Email</h4>
              <h5>shovonahmed.cse18@gmail.com</h5>
              <a href="mailto:shovonahmed.cse18@gmail.com" target='_blank' rel="noreferrer">Send Mail</a>
            </article>
            <article className='contact__option'>
              <AiOutlineMessage className='contact__icon'/>
              <h4>Messanger</h4>
              <h5>Mustak Ahmed Shovon</h5>
              <a href="https://m.me/shovon.ahmed.17" target='_blank' rel="noreferrer">Send a Message</a>
            </article>
            <article className='contact__option'>
              <TbBrandWhatsapp className='contact__icon'/>
              <h4>Whatsapp</h4>
              <a href="https://api.whatsapp.com/send?phone=8801768090753" target='_blank' rel="noreferrer">Send a Message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact