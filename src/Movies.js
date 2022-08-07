import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Movies(props) {
  let [show, setShow] = useState(false);
  let [isHovering, setIsHovering] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  function handleMouseOver() {
    setIsHovering(true);
  }

  function handleMouseOut() {
    setIsHovering(false);
  }

  return (
    <div
      className="card-container"
      style={{ display: "inline-block", flexDirection: "row" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src={"https://image.tmdb.org/t/p/w780/" + props.image}
        className="image"
        alt="movie-poster"
        onClick={handleShow}
      />
      <div className="title-hover">
        {isHovering && (
          <h5>
            {props.title} {props.name}
          </h5>
        )}
      </div>

      <div className="movie-details">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={"https://image.tmdb.org/t/p/w780/" + props.image}
              className="image-info"
              alt="movie-poster-info"
            />
            <h3>
              {props.title} {props.name}
            </h3>
            <h4>Rating: {props.rating}</h4>
            <h5>Release Date: {props.release_date}</h5>
            <br></br>
            <p>{props.overview}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
