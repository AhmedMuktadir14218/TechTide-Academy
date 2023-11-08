import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const {course}=useCourse()
    const { _id } = useParams();
    console.log(course)
    
    const selectedCourse = course?.courses.find(course => course._id === parseInt(_id));
    const desserts = course.find((name) => name === "dessert");
    if (!selectedCourse) {
      return <div>Loading...</div>; // Handle loading state or error
    }
    console.log(course._id)
    return (
        <div>
          <h1>{course._id}</h1>

        </div>
    );
};

export default CourseDetails;