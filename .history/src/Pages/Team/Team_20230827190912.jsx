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
                team.map(op=><h1 key=>

                </h1>)
            }
        </div>
    );
};

export default Team;