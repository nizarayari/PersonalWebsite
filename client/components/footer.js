import React, { Component } from 'react';

export default class Footer extends Component {



  render(){

    return (
      <div className='footer'>

        <div className="lockup">
           <img className='logo' src='../assets/logo2.png' />

          <div className='content-wraper'> 

            <nav>
              <a href=''> About Me </a>
              <a href=''> Work </a>
              <a href=''> Articles </a>
              <a href=''> Contact </a>
            </nav>

            <p className="copyright"> All content copyright 2016 </p>
          </div>

        </div>

      </div>
    )
  }
}