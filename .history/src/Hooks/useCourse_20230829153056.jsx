
const useCourse = () => {
    
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [course,setCourse]= useState([]);

    
    useEffect(() => {
       fetch('Courses.json')
           .then(res => res.json())
           .then(data => setCourse(data))
           // .then(data => console.log(data))
   }, [])
    return [menu, loading]
};

export default useCourse;