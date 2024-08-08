



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios'; // Or use 'fetch' if you prefer
// import "../Styles/Crop.css"

// const Crop = () => {
//   const { soilType, landSize, season } = useParams();
//  const [crops, setCrops] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch crops data from the backend
//   useEffect(() => {
//     const fetchCrops = async () => {
//       try {
//         const response = await axios.get('http://localhost:7051/api/v1/crop/recommendations'); // Replace with your API endpoint
//         Params: { soilType, landSize, season } 
//         setCrops(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchCrops();
//     [soilType, landSize, season];

//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className="cropspage">
//       {crops.map((crop) => (
//         <div className='cropbody' key={crop.id}> {/* Assuming each crop has a unique 'id' */}
//           <img className='cropimage1' src={"images/brinjal seed.jpg"} alt={crop.name} />
//           <div className='cropdiv'>
//             <div className='cropname'>
//               <p className='nameofcrop'>Name: {crop.name}</p>
//               <p className='cropsoiltype'>Soil Type: {crop.soilType}</p>
//               <p className='cropseason'>Season: {crop.season}</p>
//             </div>
//             <div className='cropbuttons'>
//               <button className='cropfertbut'>Fertilizers</button>
//               <button className='croppestbut'>Pesticides</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


// export default Crop;


import React, { useState, useEffect } from 'react';
import { useNavigate, useNavigation, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios'; // Or use 'fetch' if you prefer
import "../Styles/Crop.css";
// import { useNavigate } from 'react-router-dom';

// function Crop() {
//   let history = useHistory();
// }

const Crop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let navigate = useNavigate();


  const navigateToFertilizers = (cropId) => {
    navigate('/Fertilizers/'+cropId);
  }

  const navigateToPesticides = (cropId) => {
    navigate('/Pesticides/'+cropId);
  }

  
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get('http://localhost:7051/api/v1/crop/recommendations'+ '/'+searchParams.get('land')+'/'+ searchParams.get('season')+'/'+ searchParams.get('soil') );
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
    <div className="cropspage">
      {crops.map((crop) => (
        <div className='cropbody' key={crop.cropmodel.id}> {/* Assuming each crop has a unique 'id' */}
          <img className='cropimage1' src={"images/brinjal seed.jpg"} alt={crop.cropmodel.name} />
          <div className='cropdiv'>
            <div className='cropname'>
              <p className='nameofcrop'>Name: {crop.cropmodel.name}</p>
              <p className='cropsoiltype'>Soil Type: {crop.cropmodel.soilType}</p>
              <p className='cropseason'>Season: {crop.cropmodel.season}</p>
            </div>
            <div className='cropbuttons'>
              <button onClick={() => navigateToFertilizers(crop.cropmodel.id)} className='cropfertbut'>Fertilizers</button>
              <button onClick={() => navigateToPesticides(crop.cropmodel.id)} className='croppestbut'>Pesticides</button>
               <button className='buybuttoncrop'>buy</button>
               </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Crop;
