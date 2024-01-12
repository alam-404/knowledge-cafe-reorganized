import { useEffect, useState } from "react";
import "./TimeSpend.css"

const TimeSpend = (props) => {

    const readTime = props.readTime;
    
    const [newReadTime, setNewReadTime] = useState(readTime);
    useEffect(()=>{
        if (!readTime){
            setNewReadTime(0);
        }else{
            setNewReadTime(readTime)
        }
    }, [readTime])

    return (
        <div className="time-spend-section">
            <h3>Time spent: {newReadTime} min</h3>
        </div>
    );
};

export default TimeSpend;