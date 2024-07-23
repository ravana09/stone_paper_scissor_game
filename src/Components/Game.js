import React, { useState } from "react";
import "../Css/Game.css";
import Stone from "../Images/Stone image .jpg";
import Paper from "../Images/Paper image .jpg";
import Scissor from "../Images/Scissor IMage .jpg";
import { Card } from "react-bootstrap";

function StonePaperGame() {
  let [auto, setAuto] = useState("");
  let [player, setPlayer] = useState("");
  let [result, setResult] = useState("");

  function chooseWeapon(name) {
    setPlayer(name);

    let weapon = ["stone", "paper", "scissor"];

    let computer = weapon[Math.floor(Math.random() * 3)];
    setAuto(computer);

    let GameResult = "";
    if (name === computer) {
      GameResult = "Draw";
    } else if (
      (computer === "stone" && name === "scissor") ||
      (computer === "paper" && name === "stone") ||
      (computer === "scissor" && name === "paper")
    ) {
      GameResult = "Computer wins";
    } else {
      GameResult = "Player wins";
    }
    setResult(GameResult);
  }

  return (
    <>
      <Card style={{ width: "30rem" }}>
       
        <Card.Header>Stone Paper Scissor Game</Card.Header>
        <Card.Body>
          <Card.Title>Choose your weapon</Card.Title>
          <Card.Text>
          <div>
            <button
              className="weapon-button"
              onClick={() => {
                chooseWeapon("stone");
              }}
            >
              <img src={Stone} alt="Stone" />
            </button>
            <button
              className="weapon-button"
              onClick={() => {
                chooseWeapon("paper");
              }}
            >
              <img src={Paper} alt="Paper" />
            </button>
            <button
              className="weapon-button"
              onClick={() => {
                chooseWeapon("scissor");
              }}
            >
              <img src={Scissor} alt="Scissor" />
            </button>
          </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="game-container">
        <div className="game-column">
          <h1>Stone Paper Scissor Game</h1>
          <h2>Player 1</h2>
          <h1>Choose your weapon</h1>
          <div>
            <button
              className="weapon-button"
              onClick={() => {
                chooseWeapon("stone");
              }}
            >
              <img src={Stone} alt="Stone" />
            </button>
            <button
              className="weapon-button"
              onClick={() => {
                chooseWeapon("paper");
              }}
            >
              <img src={Paper} alt="Paper" />
            </button>
            <button
              className="weapon-button"
              onClick={() => {
                chooseWeapon("scissor");
              }}
            >
              <img src={Scissor} alt="Scissor" />
            </button>
          </div>
        </div>
        <div className="result-column">
          <div className="player-info">
            <h2>Player: {player}</h2>
            <h2>Computer: {auto}</h2>
          </div>
          <h2 className="result">Result: {result}</h2>
        </div>
      </div>
    </>
  );
}

export default StonePaperGame;
