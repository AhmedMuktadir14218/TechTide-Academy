import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    const [course]=useCourse()

    const {_id, cover, coursesName,  pricePer } = course;
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default CourseDetails;