import { useEffect, useState } from "react";
import PopularCourseList from "./PopularCourseList";

const PopularCourse = () => {
    const [popuCourse,setPopuCourse]= useState([]);


    
     useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setPopuCourse(data))
            // .then(data => console.log(data))
    }, [])

    const popular = popuCourse.filter(item => item.type === 'popular');
    
    return (
        <>
            <div className=' grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 mb-8 '>
                {
                    popular.map(option => <PopularCourseList
                        key={option._id} popucourses={option} 
                    >

                    </PopularCourseList>)
                }
                </div>
        </>
    );
};

export default PopularCourse;