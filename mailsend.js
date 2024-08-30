
const nodemailer = require('nodemailer');
require('dotenv').config(); 


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'snehal7722@gmail.com', 
        pass: 'pgfb dhmw pjyz sfqp', 
    },
  });

const mailOptions = {
  from: '"Snehal" <snehal7722@gmail.com>', 
  to: 'snehalkadam601@gmail.com', 
  subject: 'Hello from Nodemailer', 
  text: 'This is a test email sent from Node.js using Nodemailer.', 
  html: '<b>This is a test email sent from Node.js using Nodemailer.</b>', 
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error occurred: ' + error.message);
  }
  console.log('Email sent: ' + info.response);
});