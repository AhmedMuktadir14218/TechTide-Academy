import { useEffect, useState } from "react";
import TeamList from "./TeamList";

const Team = () => {
    const [team,setTeam]=useState([]);
     useEffect(() => {
       fetch('teamlist.json') 
    //    fetch('new.json')
       .then(res => res.json())
    //    .then(data =>     const [team,setTeam]=useState([]);
(data))
       .then(data => console.log(data))
     }, [])
     
    return (
        <div>
            
        </div>
    );
};

export default Team;