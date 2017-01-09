const aws = require('aws-sdk');

module.exports = function (app){
  
  // on a POST request
  app.post('/form', function(req, res, next){
    console.log('Received POST at /form');
    console.log(req.body)

    const { name, email, message } = req.body

    aws.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region:'us-east-1'
    }); 

    // Instantiate SES.
    const ses = new aws.SES({apiVersion: 'latest'});

    // Set Up Nodemailer then send email
    
    const mailOptions ={
        Source: '"My website" <' + process.env.user + '>',
        Destination: {
          ToAddresses: [process.env.user]
        },
        Message: {
          Subject: {
            Data: 'Info'
          },
          Body: {
            Html: {
              Data: 'You have an email from ' + name + ' ' + email + ' saying: ' + message
            }
          }
        }
      }

    // const mailOptions = {
    //   from:'"My website" <' + process.env.user + '>',
    //   to: 'nizarayari17@gmail.com',
    //   subject: 'Info',
    //   text: 'You have an email from ' + name + ' ' + email + ' saying: ' + message 
    // };

    // const transport = nodemailer.createTransport(ses(smtpConfig));
    // transport.sendMail(mailOptions, function(err, info) {
    //   if (err) console.log(err);
    //   console.log('Message sent: ');
    //   res.json({ success: true, message: 'Email has been successfuly sent.'});
    // });

    ses.sendEmail(mailOptions, function(err, data){
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent:');
        console.log(data);
        res.json({ success: true, message: 'Email has been successfuly sent.'});
      }
    })

  })

}