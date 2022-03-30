import React from "react";
import { Card } from "react-bootstrap";
import logo from '../images/logo.webp'

function LogoHeader() {
  return (
    <Card>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LogoHeader;
