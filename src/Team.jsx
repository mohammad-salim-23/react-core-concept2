import { useState } from "react"

export default function Team(){
    const [team , setTeam] = useState(11)
    const teamStyle = {
             border: '2px solid green',
             margin: '2opx',
             padding: '10px',
             borderRadius: '5px'
        
    }
    const handleAdd = () =>{
        setTeam(team+1);
    }
    const handleRemove = ()=>{
        setTeam(team-1);
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}