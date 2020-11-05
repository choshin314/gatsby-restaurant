import React from 'react'
import styled from 'styled-components'

const ContactForm = () => {
    return (
        <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <h2>Contact Us!</h2>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="label-input" >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
            </div>
            <div className="label-input" >
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div className="label-input" >
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" />
            </div>
            <div className="label-input" >
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required />
            </div>
            <button type="submit">Send Message</button>
        </Form>
    )
}

export default ContactForm

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    background: var(--contrast);
    color: var(--primary);
    padding: 2rem;
    
    h2 {
        margin-top: 0;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    div.label-input {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    input, textarea {
        border-radius: 5px;
        border: 2px solid var(--light-grey);
        line-height: 1.5;
        font-size: 1rem;
        padding: .5rem 1rem;
    }
    label {
        color: var(--light-grey);
        font-weight: 700;
        margin-bottom: .5rem;
    }
    button {
        padding: 1rem;
        font-family: inherit;
        font-size: 1.1rem;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--contrast);
        background: var(--primary);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: 0 2px 8px var(--light-grey); 
            border-radius: 5px;
            opacity: 0;
            transition: opacity .15s ease-in;
        }
        
        &:hover::after, &:focus::after {
            opacity: 1;
        }
    }
`