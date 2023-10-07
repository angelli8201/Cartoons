import { useState } from "react";
import "../styles/ContactUs.css";

export default function ContactUs() {

    const gifUrl = 'https://pa1.aminoapps.com/6936/0e7bbfd4cc42fce3584a6cfd50834405a4a48e48r1-500-500_00.gif';

        
    

    return (
        <div>
            <div className="contact-container mt-4">
                <h1>Leave a Message!</h1>
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
                            <button className='contact-button'>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
               

       </div>
        
    )
}