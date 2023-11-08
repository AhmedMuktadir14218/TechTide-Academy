import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const {course}=useCourse()
    const { _id } = useParams();
    console.log(course)
    
    const selectedCourse = course?.courses.find(course => course.id === parseInt(id));

    if (!selectedCourse) {
      return <div>Loading...</div>; // Handle loading state or error
    }
    console.log(course._id)
    return (
        <div>
          <h1>{course.coursesName}</h1>

        </div>
    );
};

export default CourseDetails;