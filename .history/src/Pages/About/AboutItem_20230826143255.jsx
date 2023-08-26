import { useEffect, useState } from "react";
import aboutimg from "../../../public/images/blog/about.webp";

import AboutOption from "./AboutOption";
const AboutItem = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    // fetch("Courses.json")
    fetch("HomeAbout.json")
      .then((res) => res.json())
      .then((data) => setAbout(data));
    //   .then((data) => console.log(data));
  }, []);

  return (
    <>
      <div className="grid lg:gap-8 sm:gap-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  ">
        {/* textinfo */}
        <div className="sm:mx-5 sm:my-4">
          <h3 className="uppercase font-bold text-blue-600"> Learn Anything</h3>
          <h1 className="font-bold text-2xl">
            Benfits About Online Learning Expertise
          </h1>
          {/* Course info */}
          <div className="grid grid-rows-1 gap-4">
            {/* {
                about.map(option => <AboutOption  key={option._id} abouts={option} ></AboutOption>)
            } */}
            <div className="card w-106 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
            <div className="card w-106 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Online Courses</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
            <div className="card w-106 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Earn A Certificates</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          
          
          
          
          </div>
        </div>

        {/* image */}
        <div className="sm:mx-5 sm:mb-4">
          <img className="w-half h-100" src={aboutimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutItem;
