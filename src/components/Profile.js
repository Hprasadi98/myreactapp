function Profile(props){
    const {name, lastname,children}=props;
    return(
        <div>
            <p>Name : {name} {lastname} {children}</p>
        </div>
        
    );
        
        
}
export default Profile;