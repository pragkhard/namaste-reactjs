
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// Named Import 
import { Header } from './components/Header';
// Default Import 
import Body from './components/Body';
// import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
//Routing configuration
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
//import Grocery from "./components/Grocery";

// Chunking  Or
// Code Splitting Or
// Dynamic Bundling  Or
// lazy Loading  Or
// on demand loading  Or
// dynamix imoprt

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    )

}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading....</h1>}>
                    <About />
                </Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading......</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)
