import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super()
        this.state={
            message:"Hello"
        }
    //    this.eventHanlder= this.eventHanlder.bind(this)
    }
    eventHanlder=() =>{
        this.setState({
            message:"Thank you "
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* You are required to bind "this" with event handler, otherwise it will give error as undefined */}
        {/* <button onClick={this.eventHanlder.bind(this)}>Click Here</button> */}
        {/* <button onClick={()=> this.eventHanlder()}>Click Here</button> */}
        <button onClick={this.eventHanlder}>Click Here</button>


      </div>
    )
  }
}

export default EventBind