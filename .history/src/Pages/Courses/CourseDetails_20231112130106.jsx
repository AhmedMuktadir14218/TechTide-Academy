// 


import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";
import { useEffect, useState } from "react";

const CourseDetails = () => {
    const [course] = useCourse();
    const { coursesID } = useParams();
    const intId = parseInt(coursesID);
    console.log(typeof intId);

    const Finder = course.find((course) => course._id === intId);
    console.log(Finder);

    // Check if Finder is defined before attempting to destructure
    if (!Finder) {
        return <div>Loading...</div>; // You can also show an error message or redirect
    }

    const { _id, cover, coursesName, pricePer } = Finder;

    return (
        <div>
            {/* {coursesID} */}
            <p>{Finder._id}</p>
            <p>{Finder.coursesName}</p>
        </div>
    );
};

export default CourseDetails;
