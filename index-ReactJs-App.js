// const heading = React.createElement("h1", { id: "heading", xyz: "xyz" }, "Hello World From React !    // External File")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

/////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. Nested Structure 

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */}

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" }),
//     React.createElement("h1", {}, "I'm h1 tag"))
// console.log(parent)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)


/////////////////////////////////////////////////////////////////////////////////////////////////////


// 2. Nested Structure 

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
</div> */}

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" }),
//     [React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag")])
// console.log(parent)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)


/////////////////////////////////////////////////////////////////////////////////////////////////////



// 3. Nested Structure 

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
</div> */}


const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" }),
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")],
        React.createElement("div", { id: "child2" }),
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")]
    ])

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
