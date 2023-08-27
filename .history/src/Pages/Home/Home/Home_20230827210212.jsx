import AboutItem from "../../About/AboutItem";
import ContactItem from "../../ContactUs/ContactItem";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <>
            <Banner/>
            <AboutItem></AboutItem>
            <Testimonial></Testimonial>
            <ContactItem></ContactItem>
            
        </>
    );
};

export default Home;