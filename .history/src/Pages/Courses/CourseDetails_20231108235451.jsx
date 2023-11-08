import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const [course]=useCourse()
    console.log
    const {_id, cover, coursesName,  pricePer } = course;
    return (
        <div>
            <h1>{coursesName}</h1>
        </div>
    );
};

export default CourseDetails;