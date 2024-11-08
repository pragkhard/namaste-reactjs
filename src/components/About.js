// import React from "react";
// OR for import the React.Component
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

// Class based component 
class About extends Component {
    constructor(props) {
        super(props)
        // console.log("Parent Constructor")
    }

    componentDidMount() {
        // console.log("Parent componentDidMount")
    }
    render() {
        // console.log("Parent Render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is the Namaste React Web Series</h2>
                <User name={"Pragati Khard (Function)"} />

                <UserClass name={"Pragati Khard (Class)"} location={"M.P"} />
                <UserClass name={"Shubhi Khard (Class)"} location={"U.P"} />
            </div>
        )
    }
}

// Functional based component 
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is the Namaste React Web Series</h2>
//             <User name={"Pragati Khard (Function)"}/>

//             <UserClass name={"Pragati Khard (Class)"} location={"M.P"}/>
//         </div>
//     )
// }

export default About;


// -Parent Constructor
// -Parent Render

// This is the render phase for both the cildrens 

//     -Pragati Khard (Class)Child Constructor
//     -Pragati Khard (Class)Child Render
//     -
//     -Shubhi Khard (Class)Child Constructor
//     -Shubhi Khard (Class)Child Render

// <DOM UPDATED - IN SINGLE BATCH>

// This is the commit phase for both the cildrens 

// -Pragati Khard (Class)Child componentDidMount
// -Shubhi Khard (Class)Child componentDidMount

// -Parent componentDidMount