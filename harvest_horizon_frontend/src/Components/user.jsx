import React from 'react'
import '../Styles/user.css'
import {useNavigate} from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  
  return (
<>

  <h4>FILL THE LAND AND GIVE SUBMIT</h4>
  <form action='/Crop' method='GET'>
  <div className='boxes'>
  <p>Soil Type</p>
      <select name="soil" className='boxes'>
          <option>ALLUVIAL</option>
          <option> BLACK</option>
          <option>SANDY_LOAM</option>
          <option>LOAM</option>
          <option>LATERITE</option>
          <option>ARID</option>
          <option>SALTY</option>
          

      </select>
      <p>Season</p>

      <select name="season" className='boxes'>
         
          <option>SUMMER</option>
          <option>WINTER</option>
          <option>RAINY</option>
          <option>SPRING</option>

      </select>
      <p>Land size</p>
      <select name="land" className='boxes'>
      
          <option>SMALL</option>
          <option>MEDIUM</option>
          <option>LARGE</option>

      </select>
      <button type className='submit'>SUBMIT</button>
      </div>
      </form>


</>
  )
}

export default User
