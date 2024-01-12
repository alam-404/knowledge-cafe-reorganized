import { useEffect, useState } from "react";
import "./TimeSpend.css"

const TimeSpend = (props) => {

    const readTime = props.readTime;

    return (
        <div className="time-spend-section">
            <h3>Time spent: {readTime || 0} min</h3>
        </div>
    );
};

export default TimeSpend;