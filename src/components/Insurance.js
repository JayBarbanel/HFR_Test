import React from "react";
import { Card } from "react-bootstrap";
import insurance from '../images/insurance.jpg';
import '../App.css';

function Insurance() {
  return (
    <Card className="cardOne">
      <Card.Img className="logo" variant="top" src={insurance} />
    </Card>
  );
}

export default Insurance;
