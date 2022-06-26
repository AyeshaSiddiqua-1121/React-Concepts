import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(){
        super()
        this.state={
            isLog: true
        }
    }

  render() {
    // Way-01 
    // if (this.state.isLog){
    //     return <div>Welcome Ayesha</div>
    // }
    // else{
    //     return <div>Welcome Guest</div>
    // }
    // let note
    // if (this.state.isLog){
    //     note=<div>Welcome Ayesha</div>
    // }
    // else{
    //     note=<div>Welcome Guest</div>
        
    // }
    // return this.state.isLog ?(
    //   <div>Welcome Ayesha</div>
    // ):(
    //   <div>Welcome Guest</div>
    // )

    // 4th way of Conditional Rendering 
    return this.state.isLog && <div>Welcome Ayesha</div>
  }
}

export default UserGreeting