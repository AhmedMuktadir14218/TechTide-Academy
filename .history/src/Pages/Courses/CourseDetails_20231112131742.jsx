import { useParams } from "react-router-dom";
import useCourse from "../../Hooks/useCourse";

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
           <p>{_id}</p>
           <div>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=ptSAV-P46-qrL-d9&amp;list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
           <p>{coursesName}</p>
        </div>
    );
};

export default CourseDetails;
