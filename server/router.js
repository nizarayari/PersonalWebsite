const nodemailer = require('nodemailer');

module.exports = function (app){
  
  // on a POST request
  app.post('/form', function(req, res, next){
    console.log('Received POST at /form');
    console.log(req.body)

    const { name, email, message } = req.body

    const smtpConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
          user: process.env.user,
          pass: process.env.password
      }
    };

    // Set Up Nodemailer then send email
    const mailOptions = {
      from:'"My website" <' + process.env.user + '>',
      to: 'nizarayari17@gmail.com',
      subject: 'Info',
      text: 'You have an email from ' + name + ' ' + email + ' saying: ' + message 
    };

    const transport = nodemailer.createTransport(smtpConfig);
    transport.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      console.log('Message sent: ' + info.response);
      res.json({ success: true, message: 'Email has been successfuly sent.'});
    });
  })


}