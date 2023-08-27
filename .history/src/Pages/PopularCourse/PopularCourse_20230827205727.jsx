import { useEffect, useState } from "react";

const PopularCourse = () => {
    const [popuCourse,setPopuCourse]= useState([]);

    
     useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setPopuCourse(data))
            // .then(data => console.log(data))
    }, [])
    return (
        <>
            <div className=' grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 mb-8 '>
                {
                    popuCourse.map(option => <CourseList
                        key={option._id} courses={option} 
                    >

                    </CourseList>)
                }
                </div>
        </>
    );
};

export default PopularCourse;