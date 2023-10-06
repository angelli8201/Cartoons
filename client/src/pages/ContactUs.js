import { useState } from "react";
import "../styles/ContactUs.css";

export default function ContactUs() {

    const gifUrl = 'https://media.tenor.com/YYJ8k1x8SmUAAAAC/dcau-justice-league-unlimited.gif'

    return (
        <div>
            <h1>Contact Us</h1>
            <div className="contact-container">
                <h3>Leave a Message!</h3>
                <p>
                    Have any concerns, compliments, cartoon suggestions?!
                    <br/>
                    Send us a message and we'll get back to you, in a flash!
                </p>
                <div className='gif-container'>
                    <img src={gifUrl} alt="animated JLU flash gif" />
                </div>

                <div>
                    <form>
                        <div>
                            <label className='contact-label' htmlFor='firstName'>First Name:</label>
                            <input type='text' id='firstName' name='firstName' />
                        </div>
                        <div>
                            <label className='contact-label' htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" />
                        </div>
                        <div>
                            <label className='contact-label' htmlFor="email">Email Add:</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div>
                            <label className='contact-label' htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" cols="50"></textarea>
                        </div>
                        <div>
                            <button className='contact-button' type="submit">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
               

       </div>
        
    )
}