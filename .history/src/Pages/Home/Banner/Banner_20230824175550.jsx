
import homebgimg from "../../../assets/wepik-export-20230824114557SK3Q.jpeg";
// import './Banner.css';
// import phone from '../../images/phone-28-24.png';
import { Link } from 'react-router-dom';
const Banner = () => {


  const SizeNav={
    // "margin-left":"135px",
        // "margin-right":"135px",
    "color":"white",
    // "font-family": "'Roboto Slab', sans-serif",
    "font-family": "'Roboto Condensed', sans-serif"
    // font-family: 'Roboto Condensed Light', sans-serif;

};


  return (

<div>
      <div className="c_padding hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${homebgimg})` }}>
  <div className="hero-content lg:flex-row-reverse">
    <img src="/src/images/allef-vinicius-IvQeAVeJULw-unsplash.jpg" alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div  style={SizeNav}>
      <h1 className="text-5xl font-bold">We Will Keep You An <br /> Impacable Look!</h1>
     <p className='my-2.5 text-slate-300'>
      3891 Ranchview Dr. Richardson, <br />
      California 62639
      </p>
      <div style={{"display":"flex"}}>
        {/* <div><span> <img src={phone} alt="" /> </span></div> */}
        
      <h1>  +1 234 567 890</h1>
      </div>
      <div className='my-3.5'>
        
      <button className="btn btn-primary"><Link to="/service">BOOK NOW</Link> </button>
      </div>
    </div>
  </div>
</div>

{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-rose-700">
          Forever Home.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Banner;