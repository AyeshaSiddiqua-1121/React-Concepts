import React,{Component} from "react";
class Welcome extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         message:"Welcome Ayesha"
    //     }
    // }
    // changeMessage(){
    //     this.setState({
    //         message:"Thanks for subscribing"
    //     })
    // }
    render(){
        const {name, prof}=this.props
        return(
            
            <div>
                <h1>{name}, profession {prof} </h1>
                <button onClick={() =>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Welcome