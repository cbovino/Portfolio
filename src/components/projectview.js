import React from 'react';
import '../App.css';
import barbell from '.././img/barbell.png'
import  Card from 'react-bootstrap/Card'
import  Button from 'react-bootstrap/Button'



export function ProjectOne(){
  return (
    <Card className= "Project" style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>Crossfit Community Management App</Card.Title>
        <Card.Img variant="top" src={barbell} className='Projectimg' />
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
