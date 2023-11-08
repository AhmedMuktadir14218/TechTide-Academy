import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const {course}=useCourse()
    // const { _id } = useParams();
    console.log(course)
    
    // const selectedCourse = course?.courses.find(course => course.id === parseInt(_id));
    
    // if (!selectedCourse) {
    //   return <div>Loading...</div>; // Handle loading state or error
    // }
    // console.log(course._id)
    return (
        <div>
          <h1>{course.le}</h1>
          {/* <h1>{selectedCourse}</h1> */}

        </div>
    );
};

export default CourseDetails;