const asyncHandler = require("express-async-handler")
const dotenv = require("dotenv")
const nodemailer = require("nodemailer")

dotenv.config();
//Send Client Message to Pazalab

const sendClientMessage = asyncHandler(async(req, res) => {
         const { name, email, phone, interest, msg} = req.body;
     
          const mailTransport = nodemailer.createTransport({
                   host: 'smtp.zoho.com',
                   port: 465,
                   secure: true,
                   auth: {
                          user: process.env.EMAIL,
                          pass: process.env.PASSWORD
                   }
          })
         
          const mailOptions1 = {
                 from: `Pazalab Website Form <${process.env.EMAIL}>`,
                 to: 'admin@pazalab.com',
                 name: 'Pazalab Website Form',
                 subject: 'New Website from Pazalab Website',
                 text: `
                         Hi, my name is ${name}\n
                         Email Address: ${email}\n
                         Phone Number: ${phone}\n
                         Subject of Concern: ${interest}\n
                         Message: ${msg}\n
                 `
          }
          const mailOptions2 = {
                from: `Pazalab Support <${process.env.EMAIL}>`,
                to: `${email}`,
                name: 'Pazalab Support',
                subject: 'MESSAGE FROM PAZALAB',
                text: "Thank you so much for getting in touch with us. \nWe wanted to let you know that we have received your message and will respond to you within 24hrs. \n\nCheers. \nPazalab Support Team "
          }

          Promise.all([
                    mailTransport.sendMail(mailOptions1),
                    mailTransport.sendMail(mailOptions2)
          ]).then(() => {
                     res.status(201).json({ message: 'Your message sent successfully!'})
          }).catch((error) => {
                  res.status(500).json({ message: 'Internal server error!'})
                  console.log(error)
          })
})


exports.sendClientMessage = sendClientMessage