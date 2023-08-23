import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      
      path:'/',
      element:<Home></Home>
    },]}
  ]);