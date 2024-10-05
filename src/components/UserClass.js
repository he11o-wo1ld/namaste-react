import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo : {
                name:"Dummy",
                location:"Default",
                avatar_url:"https://www.istockphoto.com/photos/profile-image"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/he11o-wo1ld");
        const jsonData = await data.json();

        this.setState({
            userInfo :jsonData 
        });
    }
    
    componentDidUpdate() {
        console.log("Update Mount");
    }

    componentWillUnmount(){
        console.log("UnMount Component");
    }
    
    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        // const {name, location} = this.props;

        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name : Hello {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @helloworld</h4>
            </div>
        );
    }
}

export default UserClass;