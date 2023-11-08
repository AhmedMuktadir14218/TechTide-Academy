import { useEffect, useState } from "react";

const useCourse = () => {
    
    const [course,setCourse]= useState([]);
    const [loading, setLoading] = useState(true);
    

    
    useEffect(() => {
       fetch('https://mocki.io/v1/83e1044d-1c1f-482b-b6f7-4aed8dceecd7')
           .then(res => res.json())
           .then(data => setCourse(data))
           // .then(data => console.log(data))
   }, [])
    return [course, loading]
};

export default useCourse;