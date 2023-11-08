import useCourse from "../../Hooks/useCourse";

const CourseDetails = ({service}) => {
    // const [course]=useCourse()
    // console.log(course)
    const {_id, cover, coursesName,  pricePer } = service;
    return (
        <div>
            <h1>hello {coursesName}</h1>
        </div>
    );
};

export default CourseDetails;