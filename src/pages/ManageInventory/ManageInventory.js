import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AllProducts from '../../AllProducts/AllProducts';
import useInventory from '../hooks/useInventory';
import useInventoryDetail from '../hooks/useInventoryDetail';

const ManageInventory = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch(`https://evening-reaches-93617.herokuapp.com/inventory`)
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
                <Link to="/addItem"> <button className='btn btn-success'>Add New Item</button></Link>
            </div>
        </>
    )
};





export default ManageInventory;