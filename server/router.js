



module.exports = function (app){
  

  app.post('')


  // on a GET request
  app.get('*', function(req, res, next){
    res.status(404).sendFile(__dirname + '/page404.html' )
  })

  //other request



}


function sendMail(smtpTransport, mailOptions) {
  return new Promise((resolve, reject) => {
    return smtpTransport.sendMail(mailOptions, (err) => {
      return err ? reject(err) : resolve();
    });
  });
}

function sendResetEmail(smtpTransport, host, customer) {
  const RESET_PASSWORD_EMAIL_BODY = 'Someone recently requested a password ' +
    'change for your Book Report account. If this was you, you can set a ' +
    'new password here:\n' + `http://${host}/reset/${customer.resetToken}\n` +
    'If you don\'t want to change your password or didn\'t request this, ' +
    'just ignore and delete this message.'
  return sendMail(smtpTransport, {
    to: customer.email,
    from: 'no-reply@getbookreport.com',
    subject: 'Reset your password',
    text: RESET_PASSWORD_EMAIL_BODY
  });
}