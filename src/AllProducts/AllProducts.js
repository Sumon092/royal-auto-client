import React from 'react';
import useInventory from '../pages/hooks/useInventory';
import './AllProducts.css'

const AllProducts = ({ car }) => {

    const [inventory, setInventory] = useInventory()
    const { _id, name, price, img, description, supplier, quantity } = car;

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://evening-reaches-93617.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(product => product._id !== id);
                    setInventory(remaining);
                })
        }
    }
    return (
        <>

            <div className='car-info'>
                <div>

                    <img src={img} alt="" />
                </div>
                <div className="car-item-detail">
                    <div className="car-items" title={name}>

                        <p>Name :<span className='orange-color'>{name}</span></p>
                        <p>Price : $<span className='orange-color'>{price}</span></p>
                        <p>Description :<span className='orange-color'>{description}</span></p>
                        <p><small>Supplier : {supplier}</small></p>
                        <p><small>Quantity :{quantity}</small></p>
                    </div>
                </div>
                <div className="remove-item">
                    <button className="btn btn-warning me-3 mt-3">Update</button>
                    <br />
                    {

                        <button className='btn btn-danger' onClick={() => handleDelete(car._id)}>Delete</button>


                    }
                </div>
            </div>
        </>

    );
};

export default AllProducts;