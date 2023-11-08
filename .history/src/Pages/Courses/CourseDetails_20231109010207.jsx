import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const {course}=useCourse()
    console.log(course)
    
    
    console.log(course._id)
    return (
        <div>
          <h1>{course.coursesName}</h1>

        </div>
    );
};

export default CourseDetails;