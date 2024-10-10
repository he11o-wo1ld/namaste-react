import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils/userContext";

import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


// Lazy Loading | On Demand loading | Dynamic Bundling | Code Spliting | Chuncking
const Groceory = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));



const AppLayout = () => {
    const [userName, setUserName] = useState();
    
    useEffect(() => {
        const data = {
            name : "Krishnandu",
        };
        setUserName(data.name);
    }, []);


    return (
        <userContext.Provider value={{ loggedInUser : userName, setUserName }}>

            <div className="app">
                <Header />
                <Outlet />
            </div>

        </userContext.Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element:
                (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <Groceory />
                            </Suspense>
                        )
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
