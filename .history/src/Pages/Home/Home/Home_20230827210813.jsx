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
            <div className="text-center font-bold">
                <h3 className="text-blue-600 text-2xl uppercase">Our Popular Courses</h3>
                <h1 className="">Explore Our Popular Online Courses</h1>
            </div>
            <PopularCourse></PopularCourse>
            <Testimonial></Testimonial>
            
            <ContactItem></ContactItem>

        </>
    );
};

export default Home;