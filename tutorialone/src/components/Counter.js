import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increament(){
        //First parameter is state whereas second parameter is callback function. You are passing the state as  object
        // console.log(this.state.count)
        // this.setState({
        //     count: this.state.count+1
        // }, () =>{console.log('Callback Value',this.state.count)})

        //Now to retain the state and make it dynamic, use previous state, Passing previous into the funtion 
        this.setState((prevState)=>({
            count: prevState.count+1
        }
        ))
        
    }
    increamentFiv(){
        //React calls all the set state value in a single go and does not update value 
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()

    }
  render() {
    return (
      <div>
        Counter- {this.state.count}
        <button onClick={()=> this.increamentFiv()}>Increament</button>
      </div>
    )
  }
}

export default Counter