import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Movies({
  title,
  popularity,
  release_date,
  image,
  overview,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{overview}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{popularity}</ListGroup.Item>
        <ListGroup.Item>Release date: {release_date}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
