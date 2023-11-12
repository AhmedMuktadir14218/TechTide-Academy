import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";
import { useEffect, useState } from "react";

const CourseDetails = () => {
    const [course]=useCourse()
    const { coursesID }=useParams()
    const intId =parseInt(coursesID)
    console.log(typeof(intId))

       const Finder =  course.find(course => course._id === intId);
        console.log(Finder)
       const Filltered =  course.filter(course => course._id === intId);
        console.log(Filltered)

    // console.log(course)
    const {_id, cover, coursesName,  pricePer } = Finder;
    
    return (
        <div>
            {/* {coursesID} */}
            <p>{Finder._id}</p>
            <p>{Finder.coursesName}</p>
            
            {/* <p>{serviceData.slice(0,5)}</p> */}
        </div>
    );
};

export default CourseDetails;