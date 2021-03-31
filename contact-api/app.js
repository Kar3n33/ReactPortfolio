const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const setx = process.env.SENDGRID_API_KEY;

const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')

});

app.post('http://localhost:3010/api/email', (req, res, next) => {
  sendGrid.SetApiKey();
const msg = {
    to: 'kar3n.acosta@gmail.com',
    from: req.body.email,
    subject: 'Portfolio Contact',
    text: req.body.message
}

sendGrid.send(msg)
 .then(result => {

    res.status(200).json({
        success: true
    });

 })
 .catch(err =>{
    
    console.log('error: ', err);
    res.status(401).json({
     success: false
     
    });

 });

});

app.listen(3010,'0.0.0.0');