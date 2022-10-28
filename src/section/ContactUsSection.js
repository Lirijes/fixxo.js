import React, { useState } from 'react'

const ContactUsSection = () => {
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''}) /* objektet kallas för key value pair där ex name är key och '' är värdet */
    const [formErrors, setFormErrors] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)

    const validate = (values) => { /* här stoppar vi in värden som ska valideras och stoppas in i (values), i detta fall name, email och comment */
        const errors = {} /* här får vi tillbaka ett errorobjekt som antingen är tomt eller ett felmeddelande som då kommer sättas i cons formErrors */
        const regex_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(!values.name) /* ! står för om värdet name är tomt */
            errors.name = "You must enter a name"
        else if(!values.name.lenght < 2)
            errors.name = "You must at least enter 2 characters"

        if(!values.email)
            errors.email = "You must enter an e-mail address"
        else if(!regex_email.test(values.email))
            errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(!values.comment.lenght < 5)
            errors.comment = "Your comment must be longer than 5 characters"

        if(Object.keys(errors).length === 0) /* vi vill kolla om errors i rad 9 har keys */
            setCanSubmit(true) /* om det finns värden så kan vi submitta formuläret */
        else   
            setCanSubmit(false) /* om det inte finns några värden så kan vi ej submitta formuläret  */

            
        return errors;
}


    const handleChange = (e) => {
        const {id, value} = e.target /* man hämtar ut värden till variabler genom detta */
        setContactForm({...contactForm, [id]: value}) /* informationen som skrivs in, läggs in i objektet contactForm. Genom att skriva ...contactFrom så tar man den befintliga informationen som finns i objektet*/
        /* genom att sätta in id ovan så anropar man key i detta fall name, email och comment */
        setFormErrors({...formErrors, [id]: validate(e)})
    } 

    const handleSubmit = (e) => {
        e.preventDefault() /* stänger av standardbeteendet */
        setFormErrors(validate(contactForm)) /* tar in validate som kommer ta emot värden som kommer från contactForm */
    }



  return (
    <section className="contact-us">
    <div className="container">
        <h2>Come in contact with us</h2>
        <form onSubmit={handleSubmit} novalidate>
            <div>
                {/* value används för att skapa ett värde av det som anges i formuläret, för att användaren ska kunna skriva något används onChange som sedan läggs in i objektet contactForm */}
                <input id="name" type="text" className={`${ (formErrors.name) ? "error" : "" }`} placeholder="Your Name" value={contactForm.name} onChange={handleChange} required />
                <div className="errorMessage">{formErrors.name}</div>
            </div>
            <div>
                <input id="email" type="email" className="error" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
                <div className="errorMessage">{formErrors.email}</div>
            </div>
            <div className="textarea">
                <textarea id="comment" className="error" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                <div className="errorMessage">{formErrors.comment}</div>
            </div>
            <button className="btn-red" type="submit">POST COMMENT</button>
        </form>
    </div>
    </section>
  )
}


export default ContactUsSection