import React from "react";
import "./Friendcard.css";

const Friendcard = props => (
    <div className="col-sm-3">
        <img 
        src={props.image} 
        alt={props.name} 
        className="img-thumbnail"
        value={props.name}
        key={props.id}
        onClick={() => props.handleClick(props.id)}>
        </img>
    </div>
);

export default Friendcard;