import React, { lazy, Suspense,useContext,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import './index.css';
import Contact from "./components/Contact.jsx"; 
import Cart from "./components/Cart.jsx";
import Error from "./components/Error.jsx";
import contextData from "./utils/Context.jsx";
import {Provider} from "react-redux";
import ReduxStore from "./utils/ReduxStore.js";
let RestaurantMenu = lazy(()=>import("./components/Restaurant_menu.jsx"));

const App_layout = () => {
  let data = useContext(contextData);
  const[name,setname] = useState(data.username);
  return (
    <div>
      <Provider store={ReduxStore}>
      <contextData.Provider value={{name:name,setname}}>
        <Header />
        <Outlet/>
      </contextData.Provider>
      </Provider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App_layout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurant/:id",
        element:<Suspense fallback={<h1>Your page is loading please wait for some time!!</h1>}><RestaurantMenu/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  }
]);

// Render the application with RouterProvider
const root_element = ReactDOM.createRoot(document.getElementById("root"));

root_element.render(<RouterProvider router={router} />
);
