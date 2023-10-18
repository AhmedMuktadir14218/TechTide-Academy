import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main";
import Courses from "../../Pages/Courses/Courses";
import About from "../../Pages/About/About";
import Team from "../../Pages/Team/Team";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Price from "../../Pages/Price/Price";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import Login from "../../Pages/Authorization/Login/Login";
import Signup from "../../Pages/Authorization/Signup/Signup";
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
      
      path:'/contact',
      element:<ContactUs></ContactUs>
    },
    {
      
      path:'/price',
      element:<Price></Price>
    },
    {
      
      path:'/login',
      element:<Login></Login>
    },
    {
      
      path:'/signup',
      element:<Signup
    },
    {
      
      path:'*',
      element:<NotFound></NotFound>
    },
  
  ]}
  ]);