import { useEffect, useState } from 'react';

const useInventoryDetail = id => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [id])
    return [service]
};

export default useInventoryDetail;