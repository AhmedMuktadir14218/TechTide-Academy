import { useEffect, useState } from "react";

const Team = () => {
    const [team,setTeam]=useState([]);
     useEffect(() => {
       fetch(Team.json)
     }, [])
     
    return (
        <div>
            
        </div>
    );
};

export default Team;