const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use TLS
      auth: {
        user: 'kebedeadugna45@gmail.com',
        pass: 'tqbk mlct exzq dclf',
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    await transporter.sendMail({
      from: 'kebedeadugna45@gmail.com',
      to: 'kebedeadugna45@gmail.com',
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message', error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 