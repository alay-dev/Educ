const sgMail = require('@sendgrid/mail') ;
const dotenv = require('dotenv') ;
const key = process.env.EMAIL_KEY
sgMail.setApiKey(key)

module.exports = (email) => {
    const msg = {
        to: email, // Change to your recipient
        from: 'narualay030@gmail.com', // Change to your verified sender
        subject: 'Welcome to Educ',
        html: '<p>Thanks for reaching us. We will get back to you as soon as possible </p>'
    }

    sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}