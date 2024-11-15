import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        // const timer = setInterval(() => {
        //     console.log("NAMASTE REACT OP Functional Comp.")
        // }, 1000);

        // console.log("useEffect")

        return () => {
            // clearInterval(timer);
            // console.log("useEffect Return")
        };
    }, [])
    // console.log("Render")
    return (

        <div className="user-card m-4 p-4 bg-gray-100 rounded-lg">
            <h1>Count - {count}</h1>
            <h1>Count - {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Niwari</h3>
            <h4>Contact: Pragatikhard@gmail.com</h4>
        </div>
    )
}

export default User;