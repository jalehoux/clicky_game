import React from "react";
import "./Header.css";

const Header = props => (
    <div>
        <div class="jumbotron">
            <h1 class="display-3">Star Wars Clicky Game</h1>
            <p class="lead">Test Your Memory with this Star Wars themed memory game</p>
            <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Instructions</a>
            <hr class="my-2" />
            <p>Current Score: {props.currentScore}</p>
            <p>Best Score: {props.bestScore}</p>
        </div>

    </div>
);

export default Header;