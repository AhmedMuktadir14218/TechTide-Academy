
import homebgimg from "../../../assets/wepik-export-20230824114557SK3Q.jpeg";
// import './Banner.css';
// import phone from '../../images/phone-28-24.png';
import { Link } from 'react-router-dom';
const Banner = () => {


//   const SizeNav={
//     "color":"white",
//     "font-family": "'Roboto Condensed', sans-serif"
    
// };


  return (

<div>
      {/* <div className="c_padding hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${homebgimg})` }}>
  <div className="hero-content justify-start  lg:flex-row-reverse">
   
    <div className="ml-12" style={SizeNav}>
      <h1 className="text-5xl font-bold">We Will Keep You An <br /> Impacable Look!</h1>
     <p className='my-2.5 text-slate-300'>
      3891 Ranchview Dr. Richardson, <br />
      California 62639
      </p>
      <div style={{"display":"flex"}}>
      <h1>  +1 234 567 890</h1>
      </div>
      <div className='my-3.5'>
        
      <button className="btn btn-primary"><Link to="/service">BOOK NOW</Link> </button>
      </div>
    </div>
  </div>
</div> */}


{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${homebgimg})` }}
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>
{/* 
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  > */}

  <div
    className="relative mx-auto lg:mx-0 xl: max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl md:mx-14  text-start ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-2xl font-extrabold sm:text-5xl text-white">
      WELCOME TO 

        <strong className="block font-extrabold text-neutral">
        TechTide Academy.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link to="/courses"
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
        >
          Get Started
        </Link>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
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