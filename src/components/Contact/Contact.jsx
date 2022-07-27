
import "./contact.css"
import {MdAttachEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'




const   Contact = () => {

  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5trvhjj', 'template_jd8cteu', form.current, 'WPPCF5HdenFECnXro')
    e.target.reset()
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

 <div className="container contact_container">
  <div className="contact_options">
    <article className="contact_option" >
      <MdAttachEmail className="contact_option-icons"/>
      <h4>Email</h4>
      <h5>damiyoung30@gmail.com</h5>
      <a href="mailto:damiyoung30@gmail.com" rel="noreferrer" target="_blank" >Send a Message</a>

    </article>

    <article className="contact_option" >
      <RiMessengerLine className="contact_option-icons"/>
      <h4>Messenger</h4>
      <h5>@adekule_emmanuel_esan</h5>
      <a href="https://www.facebook.com/adekunleemmanuel.esan"  rel="noreferrer" target="_blank">Send a Message</a>

    </article>

    <article className="contact_option" >
      <BsWhatsapp className="contact_option-icons"/>
      <h4>Email</h4>
      <h5>Whatsapp </h5>
      <a href="https://api.whatsapp.com/send?phone+2349057560881 " rel="noreferrer" target="_blank" >Send a Message</a>
    
    </article>
  </div>
  {/*END OF CONTACT OPTION*/}

  <form ref={form} onSubmit={sendEmail} >
<input text="text" name="name" placeholder="Your Full Name"/>
<input email="email" name="email" placeholder="Your Email"/>
<textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
<button type="submit" className="btn btn-primary">Send a Message</button>
  </form>


 </div>
    </section>
  )
}

export default Contact