import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../hooks/useInventoryDetail';

const InsertQuantity = () => {
    const { id } = useParams()
    const [inventory] = useInventoryDetail(id);


    const handleInsertQuantity = (id) => {
        fetch(`http://localhost:5000/inventory/${id}`, {
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

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const quantity = event.target.InsertQuantity.value;
        inventory.quantity(quantity);
    }

    return (
        <div>
            <form onClick={handleOnSubmit}></form>
            <input type="number" name="insertQuantity" id="insertQuantity" placeholder='manage quantity' /><br />
            <button onClick={() => handleInsertQuantity(inventory._id)} className='update-button'>Manage Quantiy</button>
        </div>
    );
};

export default InsertQuantity;