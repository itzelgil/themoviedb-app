import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

export default function Movies(props) {
  return (
    <div
      className="card-container"
      style={{ display: "inline-block", flexDirection: "row" }}
    >
      <Row className="card-container">
        <Card
          style={{
            width: "18rem",
            margin: "10px",
          }}
        >
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w780/" + props.image}
            className="image"
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}
