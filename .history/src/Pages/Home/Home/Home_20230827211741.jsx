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
                <h3 className="text-blue-600 lg:text-2xl sm:text-xl uppercase">Our Popular Courses</h3>
                <h1 className="text-black lg:text-4xl sm:text-2xl">Explore Our Popular Online Courses</h1>
            </div>
            <PopularCourse></PopularCourse>
            <div>
                
            </div>
            <Testimonial></Testimonial>
            
            <ContactItem></ContactItem>

        </>
    );
};

export default Home;