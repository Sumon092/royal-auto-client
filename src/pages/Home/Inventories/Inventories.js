import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <div className='container'>
            <h2>The number of car {cars.length}</h2>
            <div className='row'>
                {
                    cars.map(car => <Inventory key={car._id} car={car}></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;