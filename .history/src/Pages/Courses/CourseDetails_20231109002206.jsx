import useCourse from "../../Hooks/useCourse";

const CourseDetails = ({ser}) => {
    // const [course]=useCourse()
    // console.log(course)
    const {_id, cover, coursesName,  pricePer } = course;
    return (
        <div>
            <h1>hello {coursesName}</h1>
        </div>
    );
};

export default CourseDetails;