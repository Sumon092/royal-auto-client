import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetail from '../hooks/useInventoryDetail';



const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory] = useInventoryDetail(id);
    const { _id, img, name, price, supplier, quantity, description } = inventory;


    const handleDeliveredQuantity = () => {
        if (inventory.quantity < 1) {
            alert('item quantity is not enough')
            return
        }
        fetch(`http://localhost:5000/delivered/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inventory)
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
            .catch(error => console.error)
    }

    return (
        <>
            <div className='container mt-5'>
                <div className="card mb-3" style={{ width: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">ID NO : <small className='text-muted'>{_id}</small></p>
                                <p className="card-text"><small className='text-muted'>{description}</small></p>
                                <p className="card-text">Price : ${price}</p>
                                <p className="card-text">Supplier: {supplier}</p>
                                <p className="card-text">Available Quantity : {quantity}</p>
                                <button onClick={() => handleDeliveredQuantity(inventory._id)} className='update-button'>DELEVERD</button>
                                <Link to={`/insertQuantity/${_id}`}>

                                    <button className='update-button'>Manage Quantiy</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default InventoryDetail;