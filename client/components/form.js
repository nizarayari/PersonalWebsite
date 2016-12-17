import React, { Component } from 'react';


export default class Form extends Component {


  handleSubmit(){
    console.log('submit')
  }


  render(){

    return (
      <div className='form-lockup'>

        <h3 id='form'> Let's work together </h3>

        <div className='form-container'>

          <form onSubmit={this.handleSubmit}>


            <div className="input-container">
              <input type="text" required="required" autoComplete='off' />
              <label >Name/Company</label>
              <div className='bar'></div>
            </div>

            <div className="input-container">
              <input type="text" required="required" autoComplete='off' />
              <label >Email</label>
              <div className='bar'></div>
            </div>

            <div className="input-container">
              <textarea type="text" required="required" autoComplete='off' />
              <label >Message:</label>
              <div className='bar'></div>
            </div>


            <button><i className="ion-paper-airplane"></i></button>

          </form>

        </div>
      </div>
    )
  }
}