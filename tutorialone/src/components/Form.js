// Form Handling
import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state={
            name:'', 
            comments:'',
            tech:'angular'
        }
    }
    // Form handling take event as argument to change the target value
    // For updating the states of all the input elements d
    handleNameForm=event=>{
        this.setState({
            name: event.target.value
        })
    }
    handleComments=event=>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTech=event=>{
        this.setState({
            tech:event.target.value
        })
    }
    handleSubmit=event=>{
        alert(`${this.state.name}, commented: ${this.state.comments} and prefer technology: ${this.state.tech}`)
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <h1>Forms </h1>
            <label>Full Name</label>
            <input type='text' value={this.state.name} onChange={this.handleNameForm} ></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea type='textarea' value={this.state.comments} onChange={this.handleComments} ></textarea>
        </div>
        <div>
            <label>Select Technology </label>
            <select value={this.state.tech} onChange={this.handleTech}>
            <option value='react'>React A</option>
            <option value='angular'>Angular A</option>
            <option value='vue'>Vue A</option>
            </select>
        </div>
        <button type='submit' >Submit React Form </button>
      </form>
    )
  }
}

export default Form