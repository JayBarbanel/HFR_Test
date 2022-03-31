import React from 'react';
import '../App.css'
import {
    CardGroup,
    Card,
}from 'react-bootstrap';
import jacket from '../images/jckt.jpg';


function Honesty (){
    return (
<CardGroup className="cardTwo" style={{display: 'flex', flexDirection: 'row'}}>
  <Card style={{flex: 1}}>
    <Card.Img variant="top" src={jacket} />
  </Card>
  <Card style={{flex: 1}}>
    <Card.Body>
      <Card.Title className="title">Honesty</Card.Title>
      <Card.Text className="bodytxt">
      Guided by the objective of "preservation of life and property," we encompass the same values of safeguarding your future and protecting you and your families' income. <br/>It is the trust and honesty that runs deep in the first responders' culture that is also embedded in our values. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
 
</CardGroup>
    )
}

export default Honesty; 