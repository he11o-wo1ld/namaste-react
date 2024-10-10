import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import userContext from "../utils/userContext";

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             {/* <User name={"John"} /> */}
//             <UserClass />
//         </div>
//     )
// }


class About extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <div>
                    loggedInUser
                    <userContext.Consumer>
                        {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                    </userContext.Consumer>
                </div>
                <p>This is about us page</p>
                <UserClass name={"First"} location={"Raiganj"}/>
            </div>
        )
    }
}

export default About;