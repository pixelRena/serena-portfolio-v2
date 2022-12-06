const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const aws = require("aws-sdk");
const http = require("http");
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const buildPath = path.join(__dirname, 'build')
const ses = new aws.SES({region:"us-east-1"})

app.use(express.static(buildPath))
app.use(express.json())

// setInterval(function() {
//   http.get("http://serenadean.herokuapp.com")
// }, 300000);

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

app.post('/send-email', (req,res) => {
    const { name, company, message, email } = req.body;

    // validation
    if(!name.length) {
        return res.status(400).json({"message":"nameInvalid"})
    } else if(!company.length) {
        return res.status(400).json({"message":"companyInvalid"})
    } else if (!email.length) {
        return res.status(400).json({"message":"emailInvalid"})
    } else if (!message.length) {
        return res.status(400).json({"message":"messageInvalid"})
    } else {
        // no errors, proceed with sending email
        sesTest()
        .then((value => res.json({"message":"Success"})))
        .catch(error => res.json({"message":error}));
      
        function sesTest(){
          const params = {
            Destination: {
              ToAddresses: [process.env.TO_EMAIL]
            },
            Message: {
                Body: {
                    Text: {
                        Data: `Regards from: ${company}:\n Name: ${name}\n Email: ${email}\n Message: ${message}`
                    }
                },
                Subject: {
                    Data: `New email from ${company}`
              },
            },
            Source: process.env.FROM_EMAIL
          };
          return ses.sendEmail(params).promise();
        }
    }
})

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})
