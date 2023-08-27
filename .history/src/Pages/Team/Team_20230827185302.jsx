import { useEffect, useState } from "react";

const Team = () => {
    const [team,setTeam]=useState([]);
     useEffect(() => {
       fetch(Team.json) 
       .then(res => res.json())
       .then(data => setCourse(data))
       // .then(data => console.log(data))
     }, [])
     
    return (
        <div>
            
        </div>
    );
};

export default Team;