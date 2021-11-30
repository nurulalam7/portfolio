
import React from 'react'

import './Contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

 export const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_iaqthhw', 'template_v6f127b', e.target, 'user_z6jkXOkvxcTu573okN7OW')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);

      });
     e.target.reset();
  };
  return (
    <div className="dash">
      <h2>contact with us</h2>
              <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Contact
