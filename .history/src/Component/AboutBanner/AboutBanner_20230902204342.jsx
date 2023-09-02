/* eslint-disable react/prop-types */
// import aboutbgimg from "../../../public/images/blog/b1.webp"
const AboutBanner = (props) => {
    return (
        <>
         <div className="hero h-[480px]"style={{ backgroundImage: `url(${props.img})` }}>
          
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-info-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">{props.title}</h1>
      {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>   
        </>
    );
};

export default AboutBanner;