import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";
import { useEffect, useState } from "react";

const CourseDetails = () => {
    const [course]=useCourse()
    // console.log(course)
    // const {_id, cover, coursesName,  pricePer } = course;
    // const {serviceData,setServiceData} = useState("");

    // useEffect(()=>{
    //     const courseData = course.filter((courseDetailsData) => courseDetailsData.coursesID === coursesID);
    //     setServiceData(courseData[0].coursesName)
    // },[])
    const { coursesID }=useParams()
    console.log(coursesID)
    
  const popular =course.filter(item => item._id === coursesID)
  console.log(course)
    return (
        <div>
            {coursesID}
            <div className="grid md:grid-cols-2 gap-10">
                <ul>{
                    popular.map(item => <li
                        key={item._id}
                    >
                        nam
                    </li>)
                }</ul>
            </div>
            {/* {serviceData} */}
        </div>
    );
};

export default CourseDetails;