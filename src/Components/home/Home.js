import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";

import Collapse from "react-bootstrap/Collapse";

function Home() {
  const [open1, setOpen1] = useState();
  const [open2, setOpen2] = useState();
  const [open3, setOpen3] = useState();
  return (
    <div>
      <div className="discription">
        <Row>
          <Col md={6}>
            <div className="image"></div>
            <Card className="bg-dark text-white" style={{ width: "100%" }}>
              <Card.Img
                src="https://wallpaperaccess.com/full/5673721.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>{/* action required */}</Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </div>
      <Container>
        <div className="Container">
          <div className="cards1">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1622008722227%2FResNcwZyph.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
                style={{ width: "18rem" }}
              />
              <Card.Body>
                <Card.Title>React JS</Card.Title>
                <Collapse in={open1}>
                  <div id="10">
                    What is ReactJS ?<br></br>use for React is a declarative,
                    efficient, and flexible JavaScript library for building user
                    interfaces. It lets you compose complex UIs from small and
                    isolated pieces of code called “components”. We'll get to
                    the funny XML-like tags soon. We use components to tell
                    React what we want to see on the screen.
                  </div>
                </Collapse>
                <Button
                  onClick={() => setOpen1(!open1)}
                  aria-controls="10"
                  aria-expanded={open1}
                  variant="primary"
                >
                  ABOUT ME
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="cards2">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
                style={{ width: "18rem" }}
              />
              <Card.Body>
                <Card.Title>MongoDB</Card.Title>
                <Collapse in={open2}>
                  <div id="example-collapse-text">
                    what is MOngoDB <br></br>
                    MongoDB is an open source NoSQL database management program.
                    NoSQL is used as an alternative to traditional relational
                    databases. NoSQL databases are quite useful for working with
                    large sets of distributed data. MongoDB is a tool that can
                    manage document-oriented information, store or retrieve
                    information.
                  </div>
                </Collapse>
                <Button
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open2}
                  variant="primary"
                >
                  ABOUT ME
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="cards3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png"
                style={{ width: "18rem" }}
              />
              <Card.Body>
                <Card.Title>Node JS</Card.Title>
                <Collapse in={open3}>
                  <div id="12">
                    What is node <br></br>
                    Node allows developers to write JavaScript code that runs
                    directly in a computer process itself instead of in a
                    browser. Node can, therefore, be used to write server-side
                    applications with access to the operating system, file
                    system, and everything else required to build
                    fully-functional applications.
                  </div>
                </Collapse>
                <Button
                  onClick={() => setOpen3(!open3)}
                  aria-controls="12"
                  aria-expanded={open1}
                  variant="primary"
                >
                  ABOUT ME
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
