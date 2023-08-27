
const PopularCourse = () => {
    const [course,setCourse]= useState([]);

    
     useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setCourse(data))
            // .then(data => console.log(data))
    }, [])
    return (
        <>
            
        </>
    );
};

export default PopularCourse;