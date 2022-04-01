import React from 'react';
import '../App.css';
import {
    CardGroup,
    Card,
}from 'react-bootstrap';
import transparent from '../images/transparent.jpg';


function Transparent (){
    return (
<CardGroup className="cardTwo" style={{display: 'flex', flexDirection: 'row'}}>
  <Card style={{flex: 1}}>
    <Card.Img variant="top" src={transparent} />
  </Card>
  <Card style={{flex: 1}}>
    <Card.Body>
      <Card.Title className="title">Transparent</Card.Title>
      <Card.Text className="bodytxt">
      By understanding and fully knowing the unique lifestyles of first responders and their families, we are able to provide you with the coverage you need in a transparent manner. We will ensure you have a great policy at the best possible rate.  
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
 
</CardGroup>
    )
}

export default Transparent; 