import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";
import { useEffect, useState } from "react";

const CourseDetails = () => {
    const [course]=useCourse()
    const { coursesID }=useParams()
    const intId =parseInt(coursesID)
    // console.log(typeof(intId))

       const Finder =  course.find(course => course._id === intId);
        console.log(Finder)
       const Filltered =  course.filter(course => course._id === intId);
        console.log(Filltered)
    // console.log(course)
    // const {_id, cover, coursesName,  pricePer } = course;
    // const {serviceData,setServiceData} = useState("");

    // useEffect(()=>{
    //     const courseData = course.filter((courseDetailsData) => courseDetailsData._id === intId);
    //     console.log(courseData)
    //     const Finder =  course.find(course => course._id === intId);
    //     console.log(Finder)
    //     setServiceData(Finder[0].coursesName)
    // },[])
   
    
//   const popular =course.filter(item => item._id === coursesID)
//   console.log(course.coursesName)
//   const [newcourse, setnewCourse] = useState([]);

//   useEffect(() => {
//     fetch('https://mocki.io/v1/83e1044d-1c1f-482b-b6f7-4aed8dceecd7')
//       .then(response => response.json())
//       .then(data => {
//         const foundCourse = data.newcourse.find(course => course._id === intId);

//         if (foundCourse) {
//             setnewCourse(foundCourse);
//         } else {
//           console.error(`Course with id ${intId} not found`);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, [intId]);

//   if (!newcourse) {
//     return <div>Loading...</div>;
//   }

    return (
        <div>
            {coursesID}
            {/* <p>{serviceData._id}</p> */}
            <p>{serviceData._id}</p>
            
            {/* <p>{serviceData.slice(0,5)}</p> */}
        </div>
    );
};

export default CourseDetails;