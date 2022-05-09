import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleAddCar = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const image = event.target.image.value;



        const car = { name, quantity, supplier, price, image };


        //send data to server
        fetch('https://evening-reaches-93617.herokuapp.com/addCar', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('user added successful');
                event.target.reset();
            })
    }


    return (
        <div className='container mx-auto w-100 mt-5'>
            <div className="bg-light">
                <form onSubmit={handleAddCar}>
                    <input type="text" name="name" className='form-control w-25 mx-auto' placeholder='product name' id="" />
                    <br />
                    <input type="text" name="price" className='form-control w-25 mx-auto' placeholder='product price' id="" />
                    <br />
                    <input type="text" name="quantity" className='form-control w-25 mx-auto' placeholder='quantity' id="" />
                    <br />
                    <input type="text" name="image" className='form-control w-25 mx-auto' placeholder='image link' id="" />
                    <br />
                    <input type="text" name="supplier" className='form-control w-25 mx-auto' placeholder='supplier name' id="" />
                    <br />
                    <input type="text" name="description" className='form-control w-25 mx-auto' placeholder='item description' id="" />
                    <br />
                    <input type="submit" className='mx-auto w-25 btn btn-success' value="Add Items" />

                </form>
            </div>
        </div>
    );
};

export default AddNewItem;