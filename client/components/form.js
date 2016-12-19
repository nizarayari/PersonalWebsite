import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {

  constructor () {
    super ()
    this.state = {
      form: 'active',
      isLoading : '',
      isSent : '',
      name:'',
      email:'',
      message:''
    }

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(event){
    event.preventDefault()
    const { name, email, message } = this.state
    this.setState({ form: '', isLoading:'active', isSent : '' })

    axios.post('/form',{ name, email, message })
      .then((resp)=>{
        this.setState({ form: '', isLoading:'', isSent : 'active' })
      })
      .catch((err)=>{
        console.log(err)
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
              <input type="text" required="required" autoComplete='off' value={this.state.name}
                      onChange={(e)=>{this.setState({name:e.target.value})}} />
              <label >Name/Company</label>
              <div className='bar'></div>
            </div>

            <div className="input-container">
              <input type="text" required="required" autoComplete='off' value={this.state.email} 
                      onChange={(e)=>{this.setState({email:e.target.value})}}
              />
              <label >Email</label>
              <div className='bar'></div>
            </div>

            <div className="input-container">
              <textarea type="text" required="required" autoComplete='off' value={this.state.message} 
                         onChange={(e)=>{this.setState({message:e.target.value})}}/>
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