import React, { useState } from 'react';
import './App.css';
import data from './data';
import Tours from './components/Tours'

const App = () => {
  const [tours,setTours] = useState(data);
   
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id !==id);
    setTours(newTours);
  }
  if(tours.length===0){
    return(
      <div className='Refresh'>
      <h2>No Tours Left</h2>
      <button onClick={()=>{setTours(data)}} className='btn-white'>Refresh</button>
      </div>
    )
  }

  return (
    <div>   
       <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
   
    );
}

export default App;
