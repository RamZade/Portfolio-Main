import React, { useRef } from "react";
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/icons8-instagram.png'
import facebook from '../assets/facebook.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fs0xtkp', 'template_fojngj9', form.current, {
        publicKey: 'GkDeChH6kEUQTRFYf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="flex flex-col items-center gap-4" id="Contact">
      <div className="text-center ">
        <p className="text-3xl font-bold mb-3">Contact Me</p>
        <p>Please fill out the form below to discuss any work opportunities</p>
      </div>
      <form onSubmit={sendEmail} className="flex flex-col gap-5 items-center align-middle" ref={form}>
        <input
          type="text"
          placeholder="Enter Name"
          className="w-[400px] h-12 bg-gray-800 p-3 rounded-md"
          name="from_name"
        />
        <input
          type="text"
          placeholder="Enter mail"
          className="w-[400px] h-12 bg-gray-800 p-3 rounded-md"
          name="your_email"
        />
        <textarea
          name="message"
          id=""
          cols="51"
          rows="5"
          placeholder="Your Message"
          className="  bg-gray-800 rounded-md p-3"
        ></textarea>
        <button className="bg-white text-black p-2 w-40 rounded-md font-semibold mb-4">Submit</button>
      </form>
      <div className="flex gap-3 mb-8">
        <a href="https://www.linkedin.com/in/rameshwar-zade-50377a266" target="_blank"><img src={linkedin} alt=""/></a>
        <a href="https://www.instagram.com/Ram_zade59" target="_blank"><img src={instagram} alt="" /></a>
        <img src={facebook} alt="" />
      </div>
    </div>
  );
};

export default Contact;
