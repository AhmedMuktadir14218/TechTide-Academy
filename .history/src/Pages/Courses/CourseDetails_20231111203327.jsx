import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";
import { useState } from "react";

const CourseDetails = () => {
    const [course]=useCourse()
    // console.log(course)
    // const {_id, cover, coursesName,  pricePer } = course;
    const {serviceData,setServiceData} = useState("");
    const { coursesID }=useParams()
    console.log(coursesID)
    return (
        <div>
            {coursesID}
        </div>
    );
};

export default CourseDetails;