import aboutbgimg from "../../../public/images/blog/b1.webp"
const AboutBanner = () => {
    return (
        <>
         <div className="hero min-h-screen"style={{ backgroundImage: `url(${aboutbgimg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-info-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Home/About</h1>
      {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>   
        </>
    );
};

export default AboutBanner;