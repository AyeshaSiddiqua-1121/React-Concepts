import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycleA extends Component {
//   First component of the cycle
constructor(){
    super()
    this.state={
        name:'Ayesha'
    }
    console.log("Constructor A called")
}
static getDerivedStateFromProps(props,state){
    console.log("LifeCycleA derived from props")
    return null
}
componentDidMount(){
    console.log("LifeCycle A Component Did Mount")
}
    render() {
        console.log("Render method called")
    return (
      <div>
        <div>Life Cycle  A </div>
        {/* Child Component */}
        {/* Points to be noted; Life Cycle A will be called first everytime of the cycle method except child component is mounted first */}
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA