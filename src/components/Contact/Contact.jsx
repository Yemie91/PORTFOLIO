import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // ✅ UNCOMMENT THIS
import './Contact.css';

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p4p66ph', 'template_but68ci', form.current, 'j7lEfJZx6Hebte-oH')
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-section" id="contact">
      <h1>Get In Touch</h1>

      <div className="getintouch-container">
        <div className="contact-details">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to work on new projects. Feel free to send me a message about anything you'd like me to work on. You can contact me anytime.
          </p>
          <p><strong>Email:</strong> Gileon_Digital@gmail.com</p>
          <p><strong>Phone:</strong> +234 806 296 5755</p>
          <p><strong>Location:</strong> Lagos, Nigeria</p>
        </div>

        <div className="mydivform">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <input type="Phone_Number" name="user_email" placeholder="Your Number" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
            {messageSent && <p className="success-msg">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
