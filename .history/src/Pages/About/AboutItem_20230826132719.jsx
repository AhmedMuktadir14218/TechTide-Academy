import aboutimg from "../../../public/images/blog/about.webp"
const AboutItem = () => {
    return (
        <>
            <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  ">
  <div>
    
        <img className="w-half h-100" src={aboutimg} alt="" />
  </div>
  
  <div>
    <h3 className="uppercase"> Learn Anything</h3>
    <h1>Benfits About Online </h1>

  </div>
</div>
        </>
    );
};

export default AboutItem;