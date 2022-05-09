import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageInventory from '../../ManageInventory/ManageInventory';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://evening-reaches-93617.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <div className='container'>
            <h1 className='display-2 fw-bold text-center mt-5 car-items'>Car Items</h1>
            <div className='row'>
                {
                    cars.slice(0, 6).map(car => <Inventory key={car._id} car={car}></Inventory>)
                }

            </div>
            <Link to='/manageInventory'><button className='manage-inventories auto'>manage inventory</button></Link>

        </div>
    );
};

export default Inventories;