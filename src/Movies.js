import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import notfound from "./notfound.png";

export default function Movies(props) {
  console.log(props.image);
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
        src={
          props.image
            ? "https://image.tmdb.org/t/p/w780/" + props.image
            : notfound
        }
        className="image"
        alt="movie-poster"
        onClick={handleShow}
      />
      <div className="title-hover">
        {isHovering && (
          <h5 className="title">
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
            <div className="movie-info">
              <div className="row">
                <div className="col-6">
                  <img
                    src={
                      props.image
                        ? "https://image.tmdb.org/t/p/w780/" + props.image
                        : notfound
                    }
                    className="image-info"
                    alt="movie-poster-info"
                  />
                </div>
                <div className="col-4">
                  <h3 className="movie-title">
                    {props.title} {props.name}
                  </h3>
                  <h4 className="rating">Rating: {props.rating} ⭐️</h4>
                  <h5 className="release">
                    Release Date: {props.release_date}
                  </h5>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <p>{props.overview}</p>
            </div>
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
