import CourseList from "./CourseList";
import CoursesBanner from "../../Component/CoursesBanner/CoursesBanner";
import useCourse from "../../Hooks/useCourse";
import CourseDetails from "./CourseDetails";

const Courses = () => {
    const [service, setService] = useState(null);
    const [course]=useCourse()
    return (
        <>
        <CoursesBanner></CoursesBanner>
             <div className=' grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 mb-8 max-w-screen-xl mx-auto'>
                {
                    course.map(option => <CourseList
                        key={option._id} courses={option} 
                    >

                    </CourseList>)
                }
                {
                    service &&
                    <CourseDetails service={service} setService={}  ></CourseDetails>
                }
                </div>
        </>
    );
};

export default Courses;