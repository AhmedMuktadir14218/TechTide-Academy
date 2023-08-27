import coursebgimg from '../../../public/'
const contactBanner = () => {
    return (
        <>
            <div className="hero h-[480px]" style={{ backgroundImage: `url(${coursebgimg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-info-content">
    <div className="">
      <h1 className="mb-5 text-6xl uppercase font-bold">Explore Our <br /> Courses</h1>
    </div>
  </div>
</div>
        </>
    );
};

export default contactBanner;