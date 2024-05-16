import React from "react";
import playerX from "../../img/x.png";
import playerO from "../../img/circle.png";

import "./style.css";

const Player = ({ player }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;
  return (
    <div className="player">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
    </div>
  );
};
export default Player;
