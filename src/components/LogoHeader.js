import React from "react";
import { Card } from "react-bootstrap";
import logo from '../images/logo.webp';
import '../App.css';

function LogoHeader() {
  return (
    <Card className="cardOne">
      <Card.Img className="logo" variant="top" src={logo} />
    </Card>
  );
}

export default LogoHeader;
