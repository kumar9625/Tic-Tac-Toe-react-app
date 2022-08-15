import React, { useState } from "react";
import Icon from "./Components/Icons";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false)
  const [winmsg, setWinmsg] = useState("");

  const reloadGame = () => {
    setIsCross(false)
    setWinmsg("")
    itemArray.fill("empty", 0, 9);
  }

  const checkIsWinner = () => {
    const isfull = () => {
      for (var i = 0; i < 10; i++) {
        if ("empty" === itemArray[i]) {
          return false;
        }



      }
      return true;
    }


    if (itemArray[0] !== "empty" && itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2]) {
      setWinmsg(`${itemArray[0]} Won The Game!`);
    } else if (itemArray[3] !== "empty" && itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5]) {
      setWinmsg(`${itemArray[3]} Won The Game!`);
    } else if (itemArray[6] !== "empty" && itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8]) {
      setWinmsg(`${itemArray[6]} Won The Game!`);
    } else if (itemArray[3] !== "empty" && itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5]) {
      setWinmsg(`${itemArray[3]} Won The Game!`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinmsg(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinmsg(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinmsg(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinmsg(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinmsg(`${itemArray[2]} won`);
    }
    else if (

      isfull()
    ) {
      setWinmsg("Match Tied!")
    }




  }

  const changeItem = itemNumber => {
    if (winmsg) {
      return toast(winmsg, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container  fluid>
      <ToastContainer  position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winmsg ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winmsg}
              </h1>
              <Button color="success"
                block
                onClick={reloadGame} >Reload Game</Button>


            </div>
          ) : (
            <Container fluid>
              <h1 className="text-center text-success">
                TIC-TAC-TOE
              </h1>
              <h1 className="text-center text-warning">
                {isCross ? "Cross" : "Circle"} turns
              </h1>
            </Container>

          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>

            ))}
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>



  )

}

export default App;