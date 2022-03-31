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
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{flex: 1}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        You take care of emergencies, we take care of yours{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{flex: 1}}>
    <Card.Img variant="top" className="lapd" src={LAPD} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    )
}

export default Header;