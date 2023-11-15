import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const [course] = useCourse();
    const { coursesID } = useParams();
    const intId = parseInt(coursesID);
    console.log(typeof intId);

    const Finder = course.find((course) => course._id === intId);
    console.log(Finder);

    
    if (!Finder) {
        return <div>Loading...</div>; 
    }

    const { _id, cover, coursesName, pricePer } = Finder;



    return (
        <div>
           <p>{_id}</p>
           <div>
           <div src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer  
                className="elfsight-app-1e45f477-2b0c-4f40-b55d-4a4effcdef6d" data-elfsight-app-lazy></div>
           </div>
           <p>{coursesName}</p>
        </div>
    );
};

export default CourseDetails;
