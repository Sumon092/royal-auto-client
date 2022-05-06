import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory] = useInventoryDetail(id)
    console.log(inventory);
    return (
        <div>
            <h2>You are going to {inventory._id}</h2>
        </div>
    );
};

export default InventoryDetail;