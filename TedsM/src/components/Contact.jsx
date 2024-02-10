import {React, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_q68x3po', 'template_db8mv0d', form.current, {
          publicKey: 'vJgn46jQhgvq4M2xm',
        })
        .then(
          () => {
            toast.success('Successfully Send Message!')
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div id='Contact' className='max-w-xl m-auto h-full item-center justify-center text-left mt-3  border-gray-500 border-b-2 rounded pb-10'>
    <p className='text-2xl font-semibold pl-0 pb-5'>Contact</p>             
              <form ref={form} onSubmit={sendEmail} className=' bg-black/80 py-5 text-black flex flex-col items-center justify-center rounded-lg px-16 shadow-lg shadow-cyan-500/50'>
                <p className='mb-5 text-white text-xl'>Let's get in touch!</p>
                <input className=' w-full  text-md flex flex-col p-2 m-3 rounded-md '  type="text" name="from_name" placeholder='Name' required />
                <input className=' w-full  text-md flex flex-col  p-3 m-3 rounded-md ' type="email" name="to_name" placeholder='Email' required />
                <textarea className=' w-full text-md h-48  flex flex-col p-3 m-3 rounded-md ' name="message" placeholder="How can I help you?" required ></textarea>
                <button className='text-white p-2 m-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded' type="submit" value="Send">Send Message</button>
                <p className='justify-center item-center'>Your Message Successfuly Sent!</p>
              </form>  
          
    </div>
    

  )
}

export default Contact