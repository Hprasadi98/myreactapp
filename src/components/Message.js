import {Component} from 'react';
class Message extends Component{
    render(){
        return (
        <div>
        <h1>This is a component.</h1>
        <p>message : {this.props.msgcontent} time: {this.props.timetaken}</p>
        </div>
        );
    }
}
export default Message;