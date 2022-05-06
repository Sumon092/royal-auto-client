import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory] = useInventoryDetail(id)
    const { _id, img, name, price, supplier, quantity, description } = inventory;
    console.log(inventory);
    return (
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
                            <button className='update-button'>DELEVERD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default InventoryDetail;