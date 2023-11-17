// import aboutbgimg from "../../../public/images/blog/b1.webp"
const AboutBanner = (props) => {
    return (
        <>
         <div className="hero h-[480px]"style={{ backgroundImage: `url(${props.img})` }}>
          
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-info-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">{props.title}</h1>    
    </div>
  </div>
</div>   
        </>
    );
};

export default AboutBanner;