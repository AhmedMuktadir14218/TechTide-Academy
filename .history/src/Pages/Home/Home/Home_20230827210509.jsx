import AboutItem from "../../About/AboutItem";
import ContactItem from "../../ContactUs/ContactItem";
import PopularCourse from "../../PopularCourse/PopularCourse";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <>
            <Banner/>
            <AboutItem></AboutItem>
            
            <PopularCourse></PopularCourse>
            <Testimonial></Testimonial>
            
            <ContactItem></ContactItem>

        </>
    );
};

export default Home;