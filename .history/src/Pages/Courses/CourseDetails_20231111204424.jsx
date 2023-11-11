import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";
import { useEffect, useState } from "react";

const CourseDetails = () => {
    const [course]=useCourse()
    // console.log(course)
    // const {_id, cover, coursesName,  pricePer } = course;
    const {serviceData,setServiceData} = useState("");

    useEffect(()=>{
        const courseData = course.filter((courseDetailsData) => courseDetailsData.coursesID === coursesID);
        setServiceData(courseData)
    },[])
    const { coursesID }=useParams()
    console.log(coursesID)
    return (
        <div>
            {coursesID}
            {cou}
        </div>
    );
};

export default CourseDetails;