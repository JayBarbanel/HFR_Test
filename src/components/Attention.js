import React from 'react';
import '../App.css'
import {
    CardGroup,
    Card,
}from 'react-bootstrap';
import larow from '../images/larow.jpg';



function Attention (){
    return (
<CardGroup className="cardThree" style={{display: 'flex', flexDirection: 'row'}}>
  <Card style={{flex: 1}}>
  <Card.Body>
      <Card.Title className="title">Personalized Attention</Card.Title>
      <Card.Text className="bodytxt">
      At our company, we are fully committed to providing our Heroes and First Responders with the highest quality insurance plans available combined with some of the lowest possible rates.  We value the long-term relationship with our clients, and are proud to provide individuals, families, and businesses the personal attention when it matters the most.  We pride ourselves in processing claims ensuring our client's needs are fully met reducing the stress level.   
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{flex: 1}}>
  <Card.Img className="larow" variant="top" src={larow} />
  </Card>
 
</CardGroup>
    )
}

export default Attention; 