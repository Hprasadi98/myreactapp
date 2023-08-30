import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter:0,
        };
    }
    Increment(){
        this.setState({
            counter:this.state.counter+1,
        });
    }
    Decrement(){
        this.setState({
            counter:this.state.counter-1.
        });
    }
    render(){
        return (
        <div>
            <h3>Count value is : {this.state.counter}</h3>
            <button onClick={()=>this.Increment()}>Increment</button>
            <button onClick={()=>this.Decrement()}>Decrement</button>
        </div>
        );
    }
}
export default Counter;