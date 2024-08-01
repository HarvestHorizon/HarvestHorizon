import React from 'react'
import '../Styles/Shop.css'

const Shop = () => {
  return (
    <>
     <div class="main_div">
            <input class="searchbar" type="search" placeholder="Search Here"/>
            <div class="properties">
                <div class="crop">
                    <img class="cropimg" src="Images/SEEDS.jpg" alt=""/>
                    <p>CROPS</p>
                    <button class="buybutton">Buy</button>
                </div>

                <div class="crop">
                    <img class="cropimg1" src="Images/FRETILIZERS.jpg" alt=""/>
                    <p>FERTILIZERS</p>
                    <button class="buybutton">Buy</button>
                </div>


                <div class="crop">
                    <img class="cropimg2" src="Images/pesticide.jpg" alt=""/>
                    <p>PESTICIDES</p>
                    <button class="buybutton">Buy</button>
                </div>



            </div>

        </div></>
  )
}

export default Shop