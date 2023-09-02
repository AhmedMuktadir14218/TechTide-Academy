import AboutBanner from "../../Component/AboutBanner/AboutBanner";
import AboutItem from "./AboutItem";
import aboutbgimg from "../../../public/images/blog/b1.webp";
const About = () => {
    return (
        <>
        <AboutBanner title="Home/About" img={ab}></AboutBanner>
           <AboutItem></AboutItem>
        </>
    );
};

export default About;