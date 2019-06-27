import './App.css'
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value: '',
       emails: []
    }
    // this.handleChange=this.handleChange.bind(this)
  }
  handleChange = (event) => {
    this.setState({
      value :event.target.value
    })
  }
  handleKeyDown = (event) => {
    if(['Enter', 'Tab', ','].includes(event.key)){
      event.preventDefault();

      var email = this.state.value.trim()

      if(email){
        this.setState({
          emails: [...this.state.emails, email],
          value: ''
        })
      }
    }
  }

  handleDelete = (toBeRemoved) => {
    this.setState({
      emails: this.state.emails.filter(email => email !== toBeRemoved)
    })
  }
  
  render() {
    return (
      <main className="wrapper">
        <React.Fragment>
        {this.state.emails.map(
          email => <div key={email} className="email-chip"> {email} 
          <button type="button" className="button" onClick={() => this.handleDelete(email)}>
            &times;
          </button>
          </div>
        )}
        <div>
          <input className="input"
          placeholder="Write your email address"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown} />
        
        </div>
        </React.Fragment>
      </main>
    )
  }
}

export default App



