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