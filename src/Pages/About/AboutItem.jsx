import { useEffect, useState } from "react";
import aboutimg from "../../../public/images/blog/about.webp";

// import AboutOption from "./AboutOption";
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
    <div className='max-w-screen-xl mx-auto'>
      <div className="grid lg:gap-8 sm:gap-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-6 ">
        {/* textinfo */}
        <div className="sm:mx-6 sm:my-6">
          <h3 className="uppercase font-bold text-blue-600"> Learn Anything</h3>
          <h1 className="font-bold text-2xl">
            Benfits About Online Learning Expertise
          </h1>
          {/* Course info */}
          <div className="grid grid-rows-1 gap-4">
            {/* {
                about.map(option => <AboutOption  key={option._id} abouts={option} ></AboutOption>)
            } */}
            <div className="card w-106 bg-base-100 shadow-xl hover:bg-primary">
              <div className="card-body">
                <h2 className="card-title font-bold">Online Courses</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
            <div className="card w-106 bg-base-100 shadow-xl hover:bg-primary">
              <div className="card-body">
                <h2 className="card-title font-bold">Earn with Expert</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="card-actions justify-end hover:bg-primary">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
            <div className="card w-106 bg-base-100 shadow-xl hover:bg-primary">
              <div className="card-body">
                <h2 className="card-title font-bold">Earn A Certificates</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          
          
          
          
          </div>
        </div>

        {/* image */}
        <div className="sm:mx-5 sm:mb-4 ">
          <img className="w-half h-[588px]" src={aboutimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
