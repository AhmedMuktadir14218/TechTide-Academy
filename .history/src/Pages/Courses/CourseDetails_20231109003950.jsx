import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const [course]=useCourse()
    console.log(course)
    const {_id, cover, coursesName,  pricePer } = {course};
    return (
        <div>
            <h1>{_id}</h1>
            <h1>{course.length}</h1>
            <h1>Course ID: {_id}</h1>
      <h1>Number of Courses: {coursesName ? coursesName.length : 0}</h1>
      <ul>
        
      </ul>

        </div>
    );
};

export default CourseDetails;