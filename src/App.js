
import React from 'react';
import ReactDOM from 'react-dom/client';
// Named Import 
import {Header} from './components/Header';
// Default Import 
import Body from './components/Body';


const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
