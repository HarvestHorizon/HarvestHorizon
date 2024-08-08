import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Or use 'fetch' if you prefer
import "../Styles/Pesticides.css"; // Update the CSS file accordingly
import { useParams } from 'react-router-dom';

const Pesticides = () => {
  const [pesticides, setPesticides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  // Fetch pesticides data from the backend
  useEffect(() => {
    const fetchPesticides = async () => {
      try {
        const response = await axios.get('http://localhost:7051/api/v1/Pesticide/pesticides/'+params?.id); // Replace with your API endpoint
        setPesticides(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPesticides();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="pesticidepage">
      {pesticides.map((pesticide) => (
        <div className='pesticidesbody' key={pesticide.id}> {/* Assuming each pesticide has a unique 'id' */}
          <img className='fertilizerimage1' src="/images/pesticide.jpg" alt={pesticide.name} /> {/* Update image source if needed */}
          <div className='pesticidesdiv'>
            <div className='pesticidename'>
              <p className='nameofpesticides'>Name: {pesticide.name}</p>
              <p className='pesticidesdescription'>Description: {pesticide.description}</p>
              <p className='pesticidesprice'>Price: {pesticide.price}</p>
            </div>
          </div>
          <div className='pesticidesbutton'>
            <button className='buybutton'>BUY</button>
            {/* <button className='cartbutton'>ADD TO CART</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pesticides;
