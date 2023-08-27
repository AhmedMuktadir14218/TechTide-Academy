
const PopularCourse = () => {
    const [popuCourse,setPopuCourse]= useState([]);

    
     useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setPopuCourse(data))
            // .then(data => console.log(data))
    }, [])
    return (
        <>
            
        </>
    );
};

export default PopularCourse;