import React from 'react'
import '../Styles/User.css'

const user = () => {
  return (
<>

<h4>FILL THE LAND AND GIVE SUBMIT</h4>
<div className='boxes'>
<p>Soil Type</p>
    <select className='boxes'>
        <option>seclect</option>
        <option> Alluvial Soil</option>
        <option> Black Soil </option>
        <option>Red Soil</option>
        <option>Laterite Soil</option>
        <option>Desert Soil</option>
        <option>Mountain Soil</option>
        <option>Saline</option>
        <option>Peaty Soil</option>

    </select>
    <p>Seasson</p>

    <select className='boxes'>
        <option>seclect</option>
        <option>Spring</option>
        <option>Summer</option>
        <option>Autumn</option>
        <option>Winter</option>

    </select>
    <p>Land size</p>
    <select className='boxes'>
        <option>seclect</option>
        <option>0-0.5</option>
        <option> 0.5-1</option>
        <option> 1-2 </option>
        <option>2-above</option>

    </select>
    <button className='submit'>SUBMIT</button>
    </div>


    </>
  )
}

export default user
