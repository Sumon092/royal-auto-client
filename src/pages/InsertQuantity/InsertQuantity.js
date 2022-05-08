import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../hooks/useInventoryDetail';

const InsertQuantity = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setQuantity(data))
    }, [])

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const quantity = event.target.InsertQuantity.value;

        console.log(quantity)
        let result = quantity;
        if (!quantity || quantity < 0) {
            alert('please insert quantity')
        }

        fetch(`http://localhost:5000/restock/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        console.log('product update', result);
        event.target.reset();

    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="number" name="InsertQuantity" defaultValue={quantity?.quantity} id="insertQuantity" placeholder='manage quantity' /><br />
                <input type="submit" value="Manage Item" />
            </form>


        </div>
    );
};

export default InsertQuantity;