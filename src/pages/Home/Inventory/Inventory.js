import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Inventory.css'

const Inventory = ({ car }) => {
    const { name, price, img, description, supplier, quantity } = car;
    return (
        <div className='col col-md-4 mb-5 mt-5'>
            <Card style={{ width: '24rem' }}>
                <Card.Img style={{ width: "380px" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price: $ {price}</ListGroupItem>
                    <ListGroupItem>Supplier: {supplier}</ListGroupItem>
                    <ListGroupItem>Available Quantity: {quantity}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link className='update-button' href="#">Update</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Inventory;