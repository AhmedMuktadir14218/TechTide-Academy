import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const [course]=useCourse()

    const {_id, cover, coursesName,  pricePer } = courses;
    return (
        <div>
            
        </div>
    );
};

export default CourseDetails;