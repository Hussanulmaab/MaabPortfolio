import React from 'react'
import "./contacts.css"
import {Typography} from "@mui/material"
import { useState, useRef } from 'react';
import { Button } from '@mui/material'
import Particle2 from '../Particle/Particle2'
import emailjs from "@emailjs/browser"


const Contacts = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_axvkook', 'template_6jm71nl', form.current, 'pHy2P-r1UIIkOHNSs')
        .then((result) => {
            console.log(result.text);
            console.log("successfull");
        }, (error) => {
            console.log(error.text);
        });
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const contactFormHandler = (e) =>{
      e.preventDefault();
    }


  return (
    <div className='contact'>
      <div className="contactContainer">
          <form className='contactContainerForm' ref={form} onSubmit={sendEmail}>
          <Typography variant='h4'>CONTACT US</Typography>
            <input placeholder='NAME' type="text" name="user_name" id='text' value={name} 
            onChange={(e) => setName(e.target.value)}/>
            <input  placeholder='EMAIL' type="email" name="user_email" id='email' value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder='MESSAGE' name="message" id='message' rows="10" cols="30" value={message} 
            onChange={(e) => setMessage(e.target.value)} />
            <Button variant='contained' type='submit' onClick={() => alert("Message Sent Successfully")}>Send</Button>
          </form>
      </div>
        <Particle2 />
    </div>
  )
}

export default Contacts
