import React, { Component } from 'react';


export default class Form extends Component {

  constructor () {
    super ()
    this.state = {
      form: 'active',
      isLoading : '',
      isSent : ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({
      form: '',
      isLoading:'active',
      isSent : ''
    })
    this.setState({
      form: '',
      isLoading:'',
      isSent : 'active'
    })
  }


  render(){

    const { form, isLoading, isSent } = this.state;

    return (
      <div className='form-lockup'>

        <h3 id='form'> Let's work together </h3>

        <div className={`sent-mail ${isSent}`}> 
          <i className="ion-checkmark-circled"></i>
          <p> Thank you! </p>
        </div>

        <div className={`loader ${isLoading}`}>Loading...</div>

        <div className={`form-container ${form}`}>

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