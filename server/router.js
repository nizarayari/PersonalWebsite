const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');

module.exports = function (app){
  
  // on a POST request
  app.post('/form', function(req, res, next){
    console.log('Received POST at /form');
    console.log(req.body)

    const { name, email, message } = req.body

    const smtpConfig = {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey
    };

    // Set Up Nodemailer then send email
    const mailOptions = {
      from:'"My website" <' + process.env.user + '>',
      to: 'nizarayari17@gmail.com',
      subject: 'Info',
      text: 'You have an email from ' + name + ' ' + email + ' saying: ' + message 
    };

    const transport = nodemailer.createTransport(ses(smtpConfig));
    transport.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      console.log('Message sent: ');
      res.json({ success: true, message: 'Email has been successfuly sent.'});
    });
  })


}