function FunctionEvent(){
    /*function handleClick(){
        console.log("Button clicked");
    }*/
    const handleClick=()=>{
        console.log("Button clicked");
    }
    return(
        <div>
            Functional components
            <button onClick={handleClick}>Click</button>
        </div>
    );
}
export default FunctionEvent;