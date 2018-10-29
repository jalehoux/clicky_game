import React from "react";
import "./Header.css";

const Header = props => (
    <div>
        <div className="jumbotron">
            <h1 className="display-3">Star Wars Clicky Game</h1>
            <p className="lead">Test Your Memory with this Star Wars themed memory game</p>
            <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Instructions</a>
            <hr className="my-2" />
            <p>Current Score: {props.currentScore}</p>
            <p>Best Score: {props.bestScore}</p>
        </div>
    </div>
);

export default Header;