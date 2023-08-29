
import homebgimg from "../../../assets/wepik-export-20230824114557SK3Q.jpeg";
// import './Banner.css';
// import phone from '../../images/phone-28-24.png';
import { Link } from 'react-router-dom';
const Banner = () => {


  const SizeNav={
    "color":"white",
    "font-family": "'Roboto Condensed', sans-serif"
    
};


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

<section
  className="overflow-hidden bg-[`url(${})`] bg-cover bg-top bg-no-repeat"
>
  <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
        Latest Shirts
      </h2>

      <p
        className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        officia corporis quasi doloribus iure architecto quae voluptatum beatae
        excepturi dolores.
      </p>

      <div className="mt-4 sm:mt-8">
        <a
          href="#"
          className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Yours Today
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Banner;