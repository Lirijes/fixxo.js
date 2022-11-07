import React, { useState } from 'react'
import { submitData, validate } from '../assets/scripts/Validation'

const ContactUsSection = () => {

    let currentPage = "Contact Us"
    window.top.document.title = `${currentPage} || Fixxo` /* visar titel på tab, överröstar den som finns på contact.js */
  
    const [name, setName] = useState('') /* useState lagrar data, i detta fall namn */ 
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
  
    const handleChange = (e) => {
        const {id, value} = e.target /* man hämtar ut värden till variabler genom detta */
    
        switch (id) {

            case 'name':
                setName(value) /* man kallar på name i detta fall, informationen som skrivs in läggs in i value */
                break

            case 'email':
                setEmail(value)
                break

            case 'comments':
                setComments(value)
                break

            default:
                break
        }
  
        setErrors({...errors, [id]: validate(e)}) /* genom att sätta in id så anropar man key i detta fall name, email och comment */
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault()  /* stänger av standardbeteendet */
        setErrors(validate(e, {name, email, comments})) /* tar in validate som kommer ta emot värden som kommer från olika id:n */
        
        if (errors.name === null && errors.email === null && errors.comments === null) {
            
            let json = JSON.stringify({name, email, comments}) /* datan som skickas in görs om till json objekt */

            setName('')
            setEmail('')
            setComments('')
            setErrors({})

            if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json)) {
                setSubmitted(true)
            }
            else {
                setSubmitted(false)
            }
        } 
        else {
            setSubmitted(false)
        }
    }
  
  


  return (
    <section className="contact-us">
    <div className="container">

        {
          submitted ? (
          <div className="alert alert-success text-center mb-5" role="alert">
            <h3>Thank you for your comment</h3> 
            <p>We will contact you as soon as possible.</p>
            </div>  ) : (<></>)
        }

        <h2>Come in contact with us</h2>
        <form onSubmit={handleSubmit} noValidate>
            <div>
                {/* value används för att skapa ett värde av det som anges i formuläret, för att användaren ska kunna skriva något används onChange som sedan läggs in i objektet contactForm */}
                <input id="name" type="text" className={(errors.name ? 'error': '')} placeholder="Your Name" value={name} onChange={handleChange} required />
                <div className="errorMessage">{errors.name}</div>
            </div>
            <div>
                <input id="email" type="email" className={(errors.email ? 'error': '')} placeholder="Your Mail" value={email} onChange={handleChange} />
                <div className="errorMessage">{errors.email}</div>
            </div>
            <div className="textarea">
                <textarea id="comments" className={(errors.comments ? 'error': '')} placeholder="Comments" value={comments} onChange={handleChange} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )}></textarea>
                <div className="errorMessage">{errors.comments}</div>
            </div>
            <button className="btn-red" type="submit">POST COMMENT</button>
        </form>
    </div>
    </section>
  )
}


export default ContactUsSection