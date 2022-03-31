import React from 'react'
import '../App.css'
import{
    Card,
} from 'react-bootstrap'

function About(){
    return (
        <Card style={{ width: '118rem' }}>
  <Card.Body>
    <Card.Text className="about">
      About Us
    </Card.Text>
  </Card.Body>
</Card>
    )
}

export default About; 