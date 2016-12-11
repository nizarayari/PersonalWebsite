import React, { Component } from 'react';

export default class Header extends Component {



  render(){

    return (
      <div className='header'>

        <img className='logo' src='../assets/logo2.png' />

        <nav>
          <a href=''> About Me </a>
          <a href=''> Work </a>
          <a href=''> Articles </a>
          <a href=''> Contact </a>
        </nav>

        <h1> <span> JavaScript Enthousiast </span> </h1>
        <p className='subtitle'> Hello there! </p>

      </div>
    )
  }
}