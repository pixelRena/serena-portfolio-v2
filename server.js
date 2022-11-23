const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const aws = require("aws-sdk");
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const buildPath = path.join(__dirname, 'build')
const ses = new aws.SES({region:"us-east-1"})

app.use(express.static(buildPath))
app.use(express.json())

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

app.post('/send-email', (req,res) => {
    const { name, company, message } = req.body;
    sesTest()
    .then((val => res.send('Success')))
    .catch(err => res.send(err));
  
    function sesTest(){
      const params = {
        Destination: {
          ToAddresses: [process.env.TO_EMAIL]
        },
        Message: {
            Body: {
                Text: {
                    Data: `Regards from: ${company}:\n Name: ${name}\n Message: ${message}`
                }
            },
            Subject: {
                Data: "New email - To Serena"
          },
        },
        Source: process.env.FROM_EMAIL
      };
      return ses.sendEmail(params).promise();
    }
})

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})