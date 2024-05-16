import React from "react";
import playerX from "../../img/x.png"
import playerO from "../../img/circle.png"

import "./style.css";

const Player = () => (
    <button className="player">
        <img src={playerX} alt="Jogador X" />
    </button>
);
export default Player;
