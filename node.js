const express = require('express');
const twilio = require('twilio');
const app = express();

const accountSid = 'your_twilio_account_sid';
const authToken = 'your_twilio_auth_token';
const client = new twilio(accountSid, authToken);

app.get('/send-message', (req, res) => {
  client.messages.create({
    body: 'Hello from 24x7 Pest Control!',
    from: 'whatsapp:+14155238886', // Twilio's WhatsApp sandbox number
    to: 'whatsapp:+919716388950'
  }).then(message => res.send('Message sent: ' + message.sid))
    .catch(err => res.send('Error: ' + err.message));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
