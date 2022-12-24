import React from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

const Cards = ({imagen = 'https://m.media-amazon.com/images/I/61kDpsCOmPL.jpg', titulo = 'Titulo de Tarjeta', descripcion = 'Descripcion de la tarjeta'}) => {

    return (
        <div className='tarjetas'>
            <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
            <Card.Title><strong>{titulo}</strong></Card.Title>
            <Card.Text>
            {descripcion}
            </Card.Text>
            <Button variant="primary">Mas información</Button>
            </Card.Body>
            </Card>
        </div>
    )


}

export default Cards;