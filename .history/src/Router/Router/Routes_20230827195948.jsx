import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main";
import Courses from "../../Pages/Courses/Courses";
import About from "../../Pages/About/About";
import Team from "../../Pages/Team/Team";
// import About from "../../Component/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
      
      path:'/',
      element:<Home></Home>
    },
    {
      
      path:'/courses',
      element:<Courses></Courses>
    },
    {
      
      path:'/about',
      element:<About></About>
    },
    {
      
      path:'/team',
      element:<Team></Team>
    },
    {
      
      path:'/team',
      element:<Team></Team>
    },
  
  ]}
  ]);