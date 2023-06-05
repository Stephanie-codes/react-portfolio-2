const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json({ limit: "25mb"}));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/Contact', (req, res) => {
  console.log(req.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'stephaniecodes202@gmail.com',
      pass: 'zqfhxtlngqfmobsc'
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: 'stephanieb170@gmail.com',
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: `Message: ${req.body.message} from: ${req.body.fullName}`
  };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send('error');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('success');
      }
    });
  } catch (err) {
    console.log(err);
    res.send('error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
