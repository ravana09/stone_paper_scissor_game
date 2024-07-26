import React, { useEffect, useState } from "react";
import "../Css/Game.css";
import Stone from "../Images/Stone image .jpg";
import Paper from "../Images/Paper image .jpg";
import Scissor from "../Images/Scissor IMage .jpg";
import { Card, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

function StonePaperGame() {
  const [stage, setStage] = useState("name"); // name, weapon, result
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState(false);
  const [auto, setAuto] = useState("");
  const [player, setPlayer] = useState("");
  const [result, setResult] = useState("");

  let remainingName = name.slice(1);
  let capitalName = name.charAt(0).toUpperCase();
  let UserName=capitalName.concat(remainingName)

  useEffect(() => {
    if (stage === "name") {
      const fetchData = async () => {
        const { value: playerName } = await Swal.fire({
          title: "Enter your Name",
          input: "text",
          inputLabel: "Name",
          inputPlaceholder: "Enter your name here",
        });

        if (playerName) {
          setName(playerName);
          setStage("weapon");
        }
      };

      fetchData();
    }
  }, [stage]);

  function chooseWeapon(name) {
    setPlayer(name);

    const weapon = ["stone", "paper", "scissor"];
    const computer = weapon[Math.floor(Math.random() * 3)];
    setAuto(computer);

    let GameResult = "";
    if (name === computer) {
      GameResult = "It's a Tie";
    } else if (
      (computer === "stone" && name === "scissor") ||
      (computer === "paper" && name === "stone") ||
      (computer === "scissor" && name === "paper")
    ) {
      GameResult = "You Lose";
    } else {
      GameResult = `${UserName} Wins`;
    }
    setAnswer(true);
    setResult(GameResult);
    setStage("result");
  }

  const playAgain = () => {
    setAnswer(false);
    setPlayer("");
    setAuto("");
    setResult("");
    setStage("weapon");
  };

  const getImage = (choice) => {
    switch (choice) {
      case "stone":
        return Stone;
      case "paper":
        return Paper;
      case "scissor":
        return Scissor;
      default:
        return "";
    }
  };


  


  return (
    <div className="game-container">
      <center>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <div>
                    <h1>Rock Paper Scissors</h1>
                  </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
              </Row>
            </center>
      {stage === "weapon" && (
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            
            <Row>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <Card style={{ width: "30rem", height: "600px", backgroundColor: "white", borderRadius: '40px' }} className="card-rotate">
                  <Card.Body className="Weapon_card">
                    <Card.Title style={{fontSize:'40px'}}>
                      <h4 className="Wapon_user_name" >{UserName}</h4>
                      <h6>Choose your weapon</h6>
                        
                    </Card.Title>
                    <div>
                      <div>
                        <span className="weapon_Name">Stone</span>
                        <button
                          className="weapon-button"
                          onClick={() => chooseWeapon("stone")}
                        >
                          <img src={Stone} alt="Stone" />
                        </button>
                      </div>
                      <div>
                        <span className="weapon_Name">Paper</span>
                        <button
                          className="weapon-button"
                          onClick={() => chooseWeapon("paper")}
                        >
                          <img src={Paper} alt="Paper" />
                        </button>
                      </div>
                      <div>
                        <span className="weapon_Name">Scissors</span>
                        <button
                          className="weapon-button"
                          onClick={() => chooseWeapon("scissor")}
                        >
                          <img src={Scissor} alt="Scissors" />
                        </button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
            </Row>
          </Col>
        </Row>
      )}
      {stage === "result" && (
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <Card style={{ width: "30rem", height: "600px", backgroundColor: "white", borderRadius: '40px' }} className="card-rotate">
                  <Card.Body>
                    <Card.Text>
                      <div className="result-column text-center mt-4">
                        <div className="player-info">
                          <h2>{UserName}'s Choice:</h2>
                          {player && (
                            <img
                              src={getImage(player)}
                              alt={player}
                              className="chosen-image"
                            />
                          )}
                        </div>
                        <div className="player-info">
                          <h2>Computer's Choice:</h2>
                          {auto && (
                            <img
                              src={getImage(auto)}
                              alt={auto}
                              className="chosen-image"
                            />
                          )}
                        </div>
                      </div>
                      <h2 className="result">{result}</h2>
                      <button onClick={playAgain} className="play-again-button">
                        Play Again
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}></Col>
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default StonePaperGame;
