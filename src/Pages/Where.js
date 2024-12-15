import React from 'react';
import maps from '../image/map.jpg';
import '../App.css';


function Where() {
    
  return (
    <div>
  <div className="container">
  <div className="contet">
  <div className="about">WHERE TO FIND US</div>
    <p>Find us at some address at some place.</p>
   <div className='App'> <div><img src={maps} alt='fotoi' className="maps-image"/></div>
   <div className="mapouter"><div className="gmap_canvas"><iframe style={{width: 692, height: 336}} title="maps" id="gmap_canvas" src="https://maps.google.com/maps?q={tbilisi}&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
    </div>
    <p className='poria'><span className="where-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
   
  </div>
</div>
    </div>
  )
}

export default Where
