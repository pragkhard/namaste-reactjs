Episode - 1

* Write the code for "Hello World" using HTML
* Write the code for "Hello World" using javaScript
* Write the code for "Hello World" using reactJS using CDN link
* Create the nested structure code using reactJs
* Order of CDN and javaScript files
* What happens if I place tags inside the HTML <div id="root"></div> element, and at the same time,  React renders content into the same root element? 



Episode - 2

* Create a production ready application from scratch and its Configuration 
* Package Manager | Npm | Npm Init | package.json
* Bundlers | parcel | npm install -D parcel | packagelock.json | node modules (in-depth)
* Difference between package.json and packagelock.json
* Type of dependencies - Dev dependencies | Normal dependencies | Transitive dependencies
* Caret sign(^) and Tilde sign(~) 
* Can we push package.json, package-lock.json, and node_modules to GitHub | gitignore file 
* If the code works locally, why might it break in production?
* Insted of using CDN link using Npm | Building the app using parcel | npx parcel index.html  
* npm install react | npm install react-dom | npx parcel index.html
* Parcel features 
* Create the prod build | npx parcel build index.html | dist | .parcel-cache
* Browserslist


Episode - 3

* Create different scripts for starting our project in Development and Production | 
  "start":" parcel index.html" | "build": "parcel build index.html"
* JSX
* React.createElement or JSX works behind the scene
* Can browser understand JSX , If the browser can’t understand JSX how is it still working?
* Babel 
* Components | Class-based Components | Functional Components 
* Single Line and Multi Line JSX Code
* Components Composition 
* Advantages of using JSX


Episode - 4

* Creating Food Ordering App | Planning for the UI
* Way to write the Inline CSS in ReactJs
* How to make the cards dynamically | Props
* Destructuring the props
* Intregrated the API data and fetch the data manually | Destructuring the code 
* Optional Chaining
* How do I loop over the data and create the whole cards dynamically | using Map
* keys in map | optimization and performance 


Episode - 5

* Restructure our project folder | Best practics 
* Create commponents folder | utils - constants.js , mockData.js
* Type of export/import in React

1. Default Export/Import
export default Component;
import Component from "path";

2. Named Export/Import
export const Component;
import {Component} from "path";

* Can we use default export with named export ?  
* Add a button and when you click on this button, it will show you the best-rated restaurants |    filter Condition
* What is Hooks ?
* useState() 
* useEffect()
* Whenever state variable updates or changes react re-render the components.
* Why react is the most popular library and why it is fast 
* Virtual DOM | Diff algo. | Reconciliation algo. | React Fiber



Episode - 6

* Monolith & Microservices Architecture.
* Two approaches to fetch and render the data | Load and Render | Render First Fetch Later
* useEffect() | How the useEffect works
* Fetch the data from API using fetch method
* Spinning loader | Shimmer UI
* Conditional rendering 
* Deep driven in useState hook | login/logout feature implementation
* React will refresh the whole component i.e Header or it will just refresh the button?
* Toggle functionality
* Implement the search functionality
* Implement the filter logic | Resolve Bugs



Episode - 6.1 
* How to find the API 
* Extract the data from API | Logic.


Episode - 6.2
* What is CORS?
* Without using CORS Plugin how we can resolve the CORS issue?
* website:- corsproxy.io | How to use Corsproxy.io URL (https://corsproxy.io/?) 


Episode - 07

* Dive deeper in useEffect hook | If no dependency array | If dependency array is empty = [] | If dependency array is [btnNameReact] 
* Dive deeper in useState hook.
* Routing | Install react routing library | Routing configuration using createBrowserRouter | Create the own error, Customize error page | Add Hook feature 
* Create the childern routes | uses of outlet 
* React component where a header section remains static at the top, while the rest of the component loads dynamic content and updates based on data changes?
* Difference between the anchor tag and link 
* 2 types routing in web apps | Client-side routing | Server-side routing
* Create the dynamic route for all the restaurant we have
* Create the restaurant menu component
* use "useParam" Hook to access dynamic parameters from the like ID's
* According to the url my data has changed 
* Make the home restaurant clickable  


Episode - 08

* Convert functional based component into class based component | User.js - functional based | UserClass - class based
* Compare between functional and class-based components 
* What is the React.Component?
* Pass the props in functional based component and class based component 
* Create the state variable in class based component
* How to create two state variable inside the functional and class component
* How to update the variable in functional and class based components 
* How to create two state variables inside the functional and class component
* Update the variable in functional and class based components 
* How we will update count two variable in the same class component 
* LifeCycle methods of class based components
* Order of Constructor , render , componentDidMount | Parent and child relationship | uses of componentDidMount
* we have a parent and haa multiple children, then what will be the order of console.log | Reason
* Make the API call in class based component
* componentDidUpdate | console.log - Order 
* componentWillUnmount | console.log - Order 
* Write like the Class component methods in Functional components
* Disadvantage of single page application 
* Use setInterval in class component inside componentDidMount| Resolved the issue using clearInterval inside componetWillUnmount,
* Use setInterval in functional component inside useEffect | Resolved the issue using clearInterval inside Return method
* How we can get the componentWillUnmount() method in functional component | Return using useEffect