import { useContext } from "react";
import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const [course]=useCourse()
    console.log(course)
    const {_id, cover, coursesName,  pricePer } = {course};
    return (
        <div>
            <h1>{_id}</h1>
            <h1>{course}</h1>
            <h1>Course ID: {_id}</h1>
      {/* <h1>Number of Courses: {coursesName ? coursesName.length : 0}</h1> */}
      <ul>
      {
                    course.map(option => <li
                        key={option._id}
                    >

                    </li>)
                }
      </ul>

        </div>
    );
};

export default CourseDetails;