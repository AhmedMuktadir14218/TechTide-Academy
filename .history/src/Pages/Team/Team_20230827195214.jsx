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
        <>
        <Ab
            <div className=' grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 mb-8 '>
                {
                    team.map(teamCard => <TeamList
                        key={teamCard._id} teamMember={teamCard} 
                    >

                    </TeamList>)
                }
                </div>
        </>
    );
};

export default Team;