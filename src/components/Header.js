import React from "react";
import '../App.css';
import {
    CardGroup, 
    Card, 
}from "react-bootstrap"
import LAFD from "../images/lafd.png"
import LAPD from "../images/lapd.webp"



function Header(){
    return (
<CardGroup style={{display: 'flex', flexDirection: 'row'}}>
  <Card style={{flex: 1}}>
    <Card.Img variant="top" src={LAFD} />
  </Card>
  <Card style={{flex: 1}}>
    <Card.Body>
      <Card.Text className="weTake">
        You take care of emergencies.<br/> We take care of yours.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{flex: 1}}>
    <Card.Img variant="top" className="lapd" src={LAPD} />
  </Card>
</CardGroup>
    )
}

export default Header;