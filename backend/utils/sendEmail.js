import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // user: process.env.EMAIL,
    user: "greatcaris18@gmail.com",
    // pass: process.env.EMAIL_PASSWORD,
    pass: "vjggoolokhtcdukp",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text,
  };
  return transporter.sendMail(mailOptions);
};
