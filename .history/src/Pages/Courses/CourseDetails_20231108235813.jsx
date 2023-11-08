import useCourse from "../../Hooks/useCourse";

const CourseDetails = () => {
    console.log(course)
    const {_id, cover, coursesName,  pricePer } = course;
    return (
        <div>
            <h1>{coursesName}</h1>
        </div>
    );
};

export default CourseDetails;