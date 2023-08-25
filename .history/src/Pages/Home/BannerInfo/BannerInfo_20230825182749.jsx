import bannimg from "../../../assets/hero-img1.png";

const BannerInfo = () => {
    return (
        <>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100" >
     

        <img src={bannimg} alt="" />
      {/* </div> */}
      
    </div>
  </div>
</div>   
        </>
    );
};

export default BannerInfo;