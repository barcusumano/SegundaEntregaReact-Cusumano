import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardDetail = ({char}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={char.image} />
      <Card.Body>
        <Card.Title>{char.name}</Card.Title>
        <Card.Text>
          {char.status} | {char.species} | {char.gender}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardDetail;