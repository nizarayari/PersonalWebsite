import React, { Component } from 'react';

export default class Header extends Component {



  render(){

    return (
      <div className='header'>

        <div className='logo'> </div>

        <nav>
          <a href=''> About Me </a>
          <a href=''> Work </a>
          <a href=''> Articles </a>
          <a href=''> Contact </a>
        </nav>

        <h1> JavaScript Enthousiast </h1>
        <p className='subtitle'> Hello there! </p>

      </div>
    )
  }
}