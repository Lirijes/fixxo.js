export const submitData = async (url, method, data, contentType = 'application/json') => {
    
    const res = await fetch(url, { /* fetch är js varianten för att kontakta ett formulär */
        method: method,
        headers: {
            'Content-Type': contentType
        },
        body: data
    }) /* detta ska skicka iväg informationen till api */

    if(res.status === 200) /* vi får tillbaka respons på det som skickas in till api */
        return true
        return false
}


export const validate = (e, form = null) => {
    
    if (e.type === 'submit') {
        const errors = {} /* här får vi tillbaka ett errorobjekt som antingen är tomt eller ett felmeddelande som då kommer sättas i cons formErrors */
        errors.name = validate_name(form.name)
        errors.email = validate_email(form.email)
        errors.comments = validate_comments(form.comments)
        return errors
    } 

    else {
         const {id, value} = e.target
         switch(id) {

             case 'name':
                 return validate_name(value)

             case 'email':
                 return validate_email(value)

             case 'comments':
                 return validate_comments(value)
        }
    }
}
 
 
const validate_name = (value) => { /* här stoppar vi in värden som ska valideras och stoppas in i (values), i detta fall name, email och comment */
    if (!value) /* ! står för om värdet name är tomt */
        return 'A name is required'

    else if (value.length < 2)
        return 'Must be a valid name'

    else
        return null
}

const validate_email = (value) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!value)
        return 'An email address is required'

    else if (!regex_email.test(value))
        return 'Must be a valid email address'

    else
        return null
}

const validate_comments = (value) => {
    if (!value)
        return 'A comment is required'

    else if (value.length < 5)
        return 'Your comment must be at least 5 characters long'

    else
        return null
}