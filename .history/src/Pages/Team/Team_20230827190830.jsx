import { useEffect, useState } from "react";
import TeamList from "./TeamList";

const Team = () => {
    const [team,setTeam]=useState([]);
     useEffect(() => {
       fetch('teamlist.json') 
       .then(res => res.json())
       .then(data => setTeam(data))
    //    .then(data => console.log(data))
     }, [])
     
    return (
        <div>
            {
                team.map(op=>)
            }
        </div>
    );
};

export default Team;