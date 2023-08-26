import { useEffect, useState } from "react";
import aboutimg from "../../../public/images/blog/about.webp"
const AboutItem = () => {
    const [about,setAbout]=useState([]);
    useEffect(() => {
        fetch('HomeAbout.json')
            .then(res => res.json())
            // .then(data => setAbout(data))
            .then(data => console.log(data))
    }, [])
    
    return (
        <>
            <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-6 ">
  <div>
    
        <img className="w-half h-100" src={aboutimg} alt="" />
  </div>
  
  <div>
    <h3 className="uppercase font-bold text-blue-600"> Learn Anything</h3>
    <h1 className="font-bold text-2xl">Benfits About Online Learning Expertise</h1>
{/* Course info */}
<div className="grid grid-rows-2">

</div>
  </div>
</div>
        </>
    );
};

export default AboutItem;