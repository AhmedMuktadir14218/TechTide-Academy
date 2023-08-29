import coursebgimg from '../../public/images/blog/b3.webp'
const TeamBanner = () => {
    return (
        <>
            <div className="hero h-[480px]" style={{ backgroundImage: `url(${coursebgimg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-info-content">
    <div className="">
      <h1 className="mb-5 text-6xl uppercase font-bold">Our Hounarable <br /> Instractor</h1>
    </div>
  </div>
</div>
        </>
    );
};

export default TeamBanner;