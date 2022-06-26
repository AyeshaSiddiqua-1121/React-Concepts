import React, { Component } from 'react'
class LifeCycleA extends Component {
//   First component of the cycle
constructor(){
    super()
    this.state={
        name:Ayesha 
    }
    console.log("Constructor called")
}
static getDerivedStateFromProps(props,state){
    console.log("LifeCycleA derived from props")
}
componentDidMount(){
    console.log("LifeCycle A Component Did Mount")
}
    render() {
        console.log("Render method called")
    return (
      <div>LifeCycle COmponent Life Cycle </div>
    )
  }
}

export default LifeCycleA