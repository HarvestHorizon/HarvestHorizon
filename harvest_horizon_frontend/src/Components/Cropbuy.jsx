import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Or use 'fetch' if you prefer
import "../Styles/Cropbuy.css"

const Cropbuy = () => {
  const { soilType, landSize, season } = useParams();
 const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch crops data from the backend
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get('http://localhost:7051/api/v1/crop/crop'); // Replace with your API endpoint 
        setCrops(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCrops();
    
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="cropsbuypage">
      {crops.map((crop) => (
        <div className='cropbody' key={crop.id}> {/* Assuming each crop has a unique 'id' */}
          <img className='cropimage1' src={"images/brinjal seed.jpg"} alt={crop.name} />
          <div className='cropdiv'>
            <div className='cropname'>
              <p className='nameofcrop'>Name: {crop.name}</p>
              <p className='cropsoiltype'>Soil Type: {crop.soilType}</p>
              <p className='cropseason'>Season: {crop.season}</p>
            </div>
            <div className='cropbuttons'>
              <button className='cropfertbut'>Fertilizers</button>
              <button className='croppestbut'>Pesticides</button>
              <button className='cropbuybutton'>buy</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Cropbuy;