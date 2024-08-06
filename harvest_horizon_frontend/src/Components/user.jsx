import React from 'react'
import '../Styles/user.css'

const user = () => {
  return (
<>

<h4>FILL THE LAND AND GIVE SUBMIT</h4>
<div className='boxes'>
<p>Soil Type</p>
    <select className='boxes'>
        <option>select</option>
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
        <option>select</option>
        <option>Spring</option>
        <option>Summer</option>
        <option>Autumn</option>
        <option>Winter</option>

    </select>
    <p>Land size</p>
    <select className='boxes'>
    <option>select</option>
        <option>small</option>
        <option>medium</option>
        <option>large</option>

    </select>
    <button className='submit'>SUBMIT</button>
    </div>


    </>
  )
}

export default user
