const { text } = require("express");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (name, email) =>
  sgMail.send({
    to: email,
    from: "adhikarisaugat34@gmail.com",
    subject: "Welocome to the team",
    text: `we are excited to help you ${name}. Tell us how you like out product.`,
  });

const sendFinalEmail = (name, email) =>
  sgMail.send({
    to: email,
    from: "adhikarisaugat34@gmail.com",
    subject: "Final Goodbye",
    text: `We are sorry to see you go ${name}. Please reply to this email for any concerns`,
  });
module.exports = { sendWelcomeEmail, sendFinalEmail };
