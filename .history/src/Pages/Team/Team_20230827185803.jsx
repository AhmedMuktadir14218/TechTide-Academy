import { useEffect, useState } from "react";
import TeamList from "./TeamList";

const Team = () => {
    const [team,setTeam]=useState([]);
     useEffect(() => {
       fetch('TeamList.json') 
       fetch('Courses.json')
       .then(res => res.json())
    //    .then(data => setCourse(data))
       .then(data => console.log(data))
     }, [])
     
    return (
        <div>
            
        </div>
    );
};

export default Team;