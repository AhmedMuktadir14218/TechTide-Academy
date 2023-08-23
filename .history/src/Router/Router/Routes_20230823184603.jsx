import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      
      path:'/',
      element:<Home></Home>
    },]}
  ]);