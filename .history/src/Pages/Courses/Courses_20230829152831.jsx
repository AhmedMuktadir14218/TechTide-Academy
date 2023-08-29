import { useEffect, useState } from "react";
import CourseList from "./CourseList";
import CoursesBanner from "../../Component/CoursesBanner/CoursesBanner";

const Courses = () => {

    const
    // const [course,setCourse]= useState([]);

    
    //  useEffect(() => {
    //     fetch('Courses.json')
    //         .then(res => res.json())
    //         .then(data => setCourse(data))
    //         // .then(data => console.log(data))
    // }, [])
    return (
        <>
        <CoursesBanner></CoursesBanner>
             <div className=' grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 mb-8 '>
                {
                    course.map(option => <CourseList
                        key={option._id} courses={option} 
                    >

                    </CourseList>)
                }
                </div>
        </>
    );
};

export default Courses;