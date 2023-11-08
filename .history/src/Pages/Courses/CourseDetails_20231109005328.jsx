import { useContext } from "react";
import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const [course]=useCourse()
    console.log(course)
    const {_id, cover, coursesName,  pricePer } = {course};
    return (
        <div>
          

        </div>
    );
};

export default CourseDetails;