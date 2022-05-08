import { useEffect, useState } from 'react';

const useInventoryDetail = id => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [id])
    return [inventory]
};

export default useInventoryDetail;