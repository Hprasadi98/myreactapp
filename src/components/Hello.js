const name = "prasa";
const displaymsg =()=>{
    return "I need your help.";
}
function Hello(){
    return (
    <div>
    <h1>Hello {name}</h1>
    <p>I am {20+3} years old.</p>
    <p>The Message is : {displaymsg()}</p>
    </div>);
}
export default Hello;