import React from "react";

function Details(props){
    return (
        <div className="order">
            <h2>{props.stage}</h2>
            <p>{props.name}</p>
            <br/>
            <p>{props.date}</p>
        </div>
    );
}

export default Details;