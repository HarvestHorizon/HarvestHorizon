// src/ItemList.js
import React, { useState, useEffect } from 'react';
// import "../styles/Crop.css"
import CropComponent from './Components/Crop';

const cropList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch data from backend API
        fetch("'http://localhost:7051/api/v1/crop/crop")
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {items.map(crop => (
                <CropComponent key={crop.id} item={crop} />
            ))}
        </div>
    );
};

export default cropList;
