import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/Fertilizers.css"
import { useParams } from 'react-router-dom';
const Fertilizers = () => {
  //eslint - disable
  const [fertilizers, setFertilizers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  // Fetch fertilizers data from the backend
  useEffect(() => {
    const fetchFertilizers = async () => {
      try {
        const response = await axios.get('http://localhost:7051/api/v1/Fertilizer/fertilizer/'+params?.id); // Replace with your API endpoint
        setFertilizers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchFertilizers();
  }, [params]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="fertilizerpage">
      
      {fertilizers.map((fertilizer) => (
        <div className='fertilizerbody' key={fertilizer.id}> {/* Assuming each fertilizer has a unique 'id' */}
          <img className='fertilizerimage' src="/images/brinjal seed.jpg" alt={fertilizer.name} />
          <div className='fertilizerdiv'>
            <div className='fertilizername'>
              <p className='nameoffertilizers'>Name: {fertilizer.name}</p>
              <p className='fertilizersdescription'>Season: {fertilizer.description}</p>
              <p className='fertilizersprice'>Soil Type: {fertilizer.price}</p>
            </div>
            <div className='fertilizersbutton'>
              <button className='buybutton'>BUY</button>
              {/* <button className='cartbutton'>ADD TO CART</button> */}
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Fertilizers;
