import { useParams } from "react-router-dom";

const CourseDetails = () => {
    // const [course]=useCourse()
    // console.log(course)
    // const {_id, cover, coursesName,  pricePer } = course;
    const { coursesName }=useParams()
    console.log(coursesName)
    return (
        <div>
            {}
        </div>
    );
};

export default CourseDetails;