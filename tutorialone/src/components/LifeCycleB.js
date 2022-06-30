import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(){
        super()
        this.state={
            name:'Ayesha'
        }
        console.log("Constructor B called")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle B derived from props")
        return null
    }
    componentDidMount(){
        console.log("LifeCycle B Component Did Mount")
    }
    
  render() {
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB