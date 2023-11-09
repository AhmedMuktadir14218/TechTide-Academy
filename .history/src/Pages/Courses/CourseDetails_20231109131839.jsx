import useCourse from "../../Hooks/useCourse";

const CourseDetails = ({children,courseName}) => {
    // const [course]=useCourse()
    // console.log(course)
    // const {_id, cover, coursesName,  pricePer } = course;
    return (
        <div>
            {/* <h1>{_id}</h1> */}
            {/* <h1>{course.length}</h1>
            <ul>
                {
                    course.map(option => <li
                        key={option._id} 
                    >
                        <h2 >{option.coursesName}</h2>
                    </li>)
                }
                </ul> */}
                {children}
        </div>
    );
};

export default CourseDetails;