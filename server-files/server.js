require("dotenv").config();
const express = require("express"); //server
const nodemailer = require("nodemailer"); //to send mail,
const cors = require("cors"); //to open connection between two different loc

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* app.get("/", (req, res) => {
  res.json("SERVER is running....! on localhost");
}); */

app.post("/send", (req, res) => {
  const { name, email, subject, message } = req.body;

  //send email
  const transporter = nodemailer.createTransport({
    host: process.env.EXPRESS_SMTP_SERVER,
    port: process.env.EXPRESS_SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.EXPRESS_EMAIL_ID,
      pass: process.env.EXPRESS_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EXPRESS_EMAIL_ID,
    to: process.env.EXPRESS_RECEIVER_EMAIL_ID,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nSubject:${subject}\n\nMessage:${message}\n\n`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      console.log("Email sent: " + info.response);
      res.sendStatus(200);
    }
  });
});

app.use(express.static("public"));

/* app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); */

const server = app.listen(process.env.EXPRESS_PORT || 3000, () => {
  const port = server.address().port;
  console.log(`Server is running on http://localhost:${port}`);
});
