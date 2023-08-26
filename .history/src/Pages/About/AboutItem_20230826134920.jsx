import { useEffect, useState } from "react";
import aboutimg from "../../../public/images/blog/about.webp";
const AboutItem = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("HomeAbout.json")
      .then((res) => res.json())
      // .then(data => setAbout(data))
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <div className="grid lg:gap-8 sm:gap-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  ">
        {/* textinfo */}
      <div className="sm:mx-5">
          <h3 className="uppercase font-bold text-blue-600"> Learn Anything</h3>
          <h1 className="font-bold text-2xl">
            Benfits About Online Learning Expertise
          </h1>
          {/* Course info */}
          <div className="grid grid-rows-2">

          </div>

        </div>

{/* image */}
        <div className="sm:mx-5 my">
          <img className="w-half h-100" src={aboutimg} alt="" />
        </div>

        

      </div>
    </>
  );
};

export default AboutItem;
