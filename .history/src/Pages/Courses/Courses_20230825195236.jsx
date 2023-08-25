import { useEffect, useState } from "react";
import CourseList from "./CourseList";

const Courses = () => {
    const [course,setCourse]= useState([]);

    
     useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setCourse(data))
            // .then(data => console.log(data))
    }, [])
    return (
        <>
             <div className='c_padding grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
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