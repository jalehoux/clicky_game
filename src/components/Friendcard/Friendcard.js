import React from "react";
import "./Friendcard.css";

const Friendcard = props => (
    <div class="col-lg-3">
        <img 
        src={props.image} 
        alt={props.name} 
        className="img-thumbnail"
        value={props.name}
        key={props.id}>
        </img>
    </div>
);

export default Friendcard;