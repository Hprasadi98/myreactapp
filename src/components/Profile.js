function Profile(props){
    console.log(props);
    return <p>Name : {props.name} {props.lastname} {props.children}</p>
}
export default Profile;