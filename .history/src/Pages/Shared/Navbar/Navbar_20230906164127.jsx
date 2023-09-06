import { Link } from "react-router-dom";
import iconimg from '../../../assets/mortarboard.png'

const Navbar = () => {

    const navOptions = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/courses'>All Courses</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/team'>Team</Link></li>
    <li><Link to='/price'>Pricing</Link></li>
    <li><Link to='/contact'>Contact Us</Link></li>
</>

    return (
        <>
        <div className="max-w-screen navbar fixed z-10 bg-opacity-30 bg-black text-white">
<div className="navbar-start lg:mx-22 md:mx-22">
 <div className="dropdown">
   <label tabIndex={0} className="btn btn-ghost lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </label>
   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">
     {navOptions}
   </ul>
 </div>
 
 <a className="btn btn-ghost  normal-case lg:text-xl sm:text-md"><img className="object-contain h-6 w-8 ..." src={iconimg} alt="" /> <Link to="/" >TechTide Academy</Link></a>
</div>
<div className="navbar-center hidden lg:flex">
 <ul className="menu menu-horizontal px-1 font-bold">
   {navOptions}
 </ul>
</div>
<div className="navbar-end lg:mx-32 md:mx-22">
 <Link to='*' className="btn btn-primary hover:bg-blue-600">Login</Link>
</div>
</div>
     </>
    );
};

export default Navbar;