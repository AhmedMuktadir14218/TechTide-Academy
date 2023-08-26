import aboutimg from "../../../public/images/blog/about.webp"
const AboutItem = () => {
    return (
        <>
            <div className="grid grid-cols-2 sm:grid  gap-4">
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