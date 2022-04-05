import './login.css'
import React from 'react'
import axios from "axios"
const baseUrl = 'http://localhost:7777/user'
const img = require('../../assets/logo-tac.png')
 

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({username: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
      const username = this.state
      axios.get(baseUrl+'?username='+username.username).then(resp=>{
         
          const data = resp.data.results
           if(data.length !== 0){
              localStorage.setItem('@user',JSON.stringify(data))
              window.location.reload()
          }else{
            axios.post(baseUrl,username).then(resp=>{
              const data = resp.data.results
              localStorage.setItem('@user',JSON.stringify(data))
              window.location.reload()
            })
            return ''
          }
      })

    }
    
  
    render() {
      return (
        <div className="content" >
          <div className='contenerImg' >

          <img src={img} alt="logo" />
          </div>
        <form  onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input className="text" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
  
          <input  type="submit" value="Submit" />
        </form>

        </div>
      );
    }
  }