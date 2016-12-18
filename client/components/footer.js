import React, { Component } from 'react';


export default class Footer extends Component {

  render(){

    return (
      <div className='footer'>

        <div className="lockup">
          
        <div className='logo'>
          <i className="fa fa-code" aria-hidden="true"></i>
        </div>

          <div className='content-wraper'> 

            <nav>
              <a href='#about-me'> About Me </a>
              <a href='#me'> Work </a>
              <a href='#ref'> References </a>
              <a href='#contact'> Contact </a>
            </nav>

            <p className="copyright"> All content copyright 2016 </p>
          </div>

        </div>

      </div>
    )
  }
}