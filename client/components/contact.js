import React, { Component } from 'react';


export default class Contact extends Component {

  render(){

    return (
      <div className='contact-lockup'>

        <h3 id='contact'> contact </h3>

        <div className='social-icons'>
          <a href="mailto:nizarayari17@gmail.com?Subject=contact" target="_top"><i className="ion-at"></i></a>
          <a href='https://www.linkedin.com/in/nizarayari' target='_blank'><i className="ion-social-linkedin"></i></a>
          <a href='https://github.com/nizarayari' target='_blank'><i className="ion-social-github"></i></a>
          <a href='https://twitter.com/nizarayari175' target='_blank'><i className="ion-social-twitter"></i></a>
        </div>

        <hr className='bar'/>

        <p className='bigEmail'> nizarayari17@gmail.com </p>

      </div>
    )
  }
}