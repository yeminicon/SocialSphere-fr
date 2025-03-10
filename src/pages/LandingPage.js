import React from 'react';

import Collection from '../components/Collection';
import Popular from '../components/Popular';
import Slider from '../components/Slider';
import SpecialOffer from '../components/SpecialOffer';



const  LandingPage = () => {
  return (
    <>
    <div>  
   <Slider />
   <Collection />
   <SpecialOffer />
  
   <Popular />


    </div>
    </>
  )
}

export default LandingPage; 