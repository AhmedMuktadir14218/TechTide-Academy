import aboutimg from "../../../public/images/blog/about.webp"
const AboutItem = () => {
    return (
        <>
            <div className="grid gap-4 lg:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  ">
  <div>
    
        <img className="w-half h-100" src={aboutimg} alt="" />
  </div>
  
  <div>
    <h2>hello</h2>

  </div>
</div>
        </>
    );
};

export default AboutItem;