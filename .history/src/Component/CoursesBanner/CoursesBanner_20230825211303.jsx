import coursebgimg from '../../../public/images/blog/b6.webp'
const CoursesBanner = () => {
    return (
        <>
            <div className="hero h-[480px]" style={{ backgroundImage: `url(${coursebgimg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-8xl uppercase font-bold">Explore Our Courses</h1>
    </div>
  </div>
</div>
        </>
    );
};

export default CoursesBanner;