import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <div className='container'>
            <h1 className='display-2 fw-bold text-center mt-5 car-items'>Car Items</h1>
            <div className='row'>
                {
                    cars.map(car => <Inventory key={car._id} car={car}></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;