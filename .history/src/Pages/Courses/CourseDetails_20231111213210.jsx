import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";
import { useEffect, useState } from "react";
import axios from "axios";

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
    
//   const popular =course.filter(item => item._id === coursesID)
  console.log(course.coursesName)
  const [newcourse, setnewCourse] = useState(null);

  useEffect(() => {
    fetch('https://mocki.io/v1/83e1044d-1c1f-482b-b6f7-4aed8dceecd7')
      .then(response => response.json())
      .then(data => {
        const course = data.courses.find(course => course.id === id);
        setCourses(course);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

//   if (!newcourse) {
//     return <div>Loading...</div>;
//   }
    return (
        <div>
            {coursesID}
            {/* <div className="grid md:grid-cols-2 gap-10">
                <ul>{
                    course.map(item => <li
                        key={item._id}
                    >
                        {item.coursesName}
                    </li>)
                }</ul>
            </div> */}
            {/* {serviceData} */}
        </div>
    );
};

export default CourseDetails;