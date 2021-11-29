// src/Form.js
// https://docs.netlify.com/forms/setup/
import './form.css'
import {useState} from "react";
import React, { Component }  from 'react';
export default function Form() {
  const [state,setState]=useState(false);
  let url="https://metamask.io/faqs.html";
  return (
    <div className="container">
      <div className="header">
          <h1>Whitelist</h1>
      </div> 

      <p>
        Thank you for your interest in joining the whitelist <br/>for Damon Sharpe's Tokyo CyberHeart Drop.<br/>Please fill this form and follow the steps below to enter the Whitelist.
        <br/><br/>Whitelist Start: Dec 1st, 2021, 12:00 am PST <br/>
        Whitelist Closes: Dec 14th, 2021, 11:59 pm PST <br/>
        Official Launch: Dec 15th, 2021, 12:00 am PST     
      </p>      
    <div className="background-img">
      <div className="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="content">



        <form
           method="post" 
          name='contactform' 
          className='contactForm'
         data-netlify="true" 
         data-netlify-honeypot="bot-field">

          <input 
            type='text' 
            name='name' 
            placeholder='Enter Name' />

          <input 
            type='email' 
            name='email' 
            placeholder='Enter Email' />
        <input 
                type='ETHWallet' 
                name='ETHWallet' 
                placeholder='Enter Ethereum Address' />

        {/* <div className="MetamaskInstall">
          <a href={url}>Need to Get Ethereum Wallet</a>
        </div> */}

        <input 
                type='Telegram' 
                name='telegram' 
                placeholder='Enter Telegram' />

        <input 
                type='Discord' 
                name='Discord' 
                placeholder='Enter Discord' />
{/* 
          <textarea 
            name='message' 
            placeholder='Message'></textarea> */}
          <br />
          <button type='submit' className="button-64" >Submit</button>
        </form> 





          {/* <h2>My animated Border </h2> */}
          {/* <p><a>All our modules are designed to play nicely with responsive of course. At the end of the day it comes down to the theme you use - our code doesn't get in your way.</a></p> */}
        </div>   
      </div>
    </div>
  </div>
  )
}
