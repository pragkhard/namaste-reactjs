import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count1: 1,

            userInfo: {
                name: "Dummy",
                locationTwo: "Default",
                avatar_url: "http://dummy-photo.com"
            }
        }
        // console.log(this.props.name + "Child Constructor")
    }
    async componentDidMount() {
        // console.log(this.props.name + "Child componentDidMount")

        const data = await fetch("https://api.github.com/users/pragkhard")
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json)
    }
    componentDidUpdate() {
        // console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        // console.log("componentWillUnmount")
    }
    render() {
        const { name, location } = this.props;
        const { count, count1 } = this.state;
        const { locationTwo } = this.state.userInfo;

        // console.log(this.props.name + "Child Render")
        // debugger;
        return (
            <div className="user-card m-4 p-4 bg-gray-200 ">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    // NEVER UPDATE STATE VARIABLES DIRECTLY 
                    //    this.state.count =   this.state.count+1
                    this.setState({
                        count: this.state.count + 1,
                        count1: this.state.count1 + 1,
                    })


                }}>Count Increase</button>
                <h1>Count: {count1}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: Pragatikhard@gmail.com</h4>
                {/* Update the api data  */}
                <h3>Dummy Name: {this.state.userInfo.name}</h3>
                <h3>Dummy Location : {locationTwo}</h3>
                {/* <img src={avatar_url} /> */}

            </div>
        )
    }
}

export default UserClass;


/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */
