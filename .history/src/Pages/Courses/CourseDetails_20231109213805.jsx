import { useParams } from "react-router-dom";

const CourseDetails = () => {
    // const [course]=useCourse()
    // console.log(course)
    // const {_id, cover, coursesName,  pricePer } = course;
    const { coursesName }=useParams()
    console.log(coursesName)
    return (
        <div>
            {/* <h1>{_id}</h1> */}
            {/* <h1>{course.length}</h1>
            <ul>
                {
                    course.map(option => <li
                        key={option._id} 
                    >
                        <h2 >{option.coursesName}</h2>
                    </li>)
                }
                </ul> */}
                {courseName}
        </div>
    );
};

export default CourseDetails;