import { useState } from "react";

const useCourse = () => {
    
    const [course,setCourse]= useState([]);
    const [loading, setLoading] = useState(true);
    

    
    useEffect(() => {
       fetch('Courses.json')
           .then(res => res.json())
           .then(data => setCourse(data))
           // .then(data => console.log(data))
   }, [])
    return [menu, loading]
};

export default useCourse;