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
        <div>
          <img className="w-half h-100" src={aboutimg} alt="" />
        </div>

        

      </div>
    </>
  );
};

export default AboutItem;
