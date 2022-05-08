import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllProducts from '../../AllProducts/AllProducts';
import useInventory from '../hooks/useInventory';
import useInventoryDetail from '../hooks/useInventoryDetail';

const ManageInventory = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/inventory`)
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <>
            <div className="container">
                <div className="w-100 mx-auto">
                    <h1>Total Products: {cars.length}</h1>
                    {
                        cars.map(car => <AllProducts key={car._id} car={car}></AllProducts>)
                    }
                </div>
            </div>
        </>
    )
};





export default ManageInventory;