import React from 'react';
import useInventory from '../hooks/useInventory';

const ManageInventory = () => {
    const [cars] = useInventory()

    return (
        <div>
            <h2>This is inventories {cars.length}</h2>
        </div>
    );
};

export default ManageInventory;