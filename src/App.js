import logo from './logo.svg';
import './App.css';
import data from './data';
import Tours from './components/Tours';
import { useState } from 'react';

function App() {

  const [tours,setTours] = useState(data)


//this is how we will remove the data/card from the display by clicking on the not interested button since id is a unique attribute so we will make use of it 
  function removeTour(id){
    const newTours= tours.filter(tour => tour.id!==id);
    setTours(newTours);
  }

  if(tours.length===0){
    return (
      <div className='refresh'>
        <h2 className="tours-left">No Tours left</h2>
        {/* if we click on the refresh button then we het all our cards back */}
        <button className="btn-white" onClick={() => setTours(data)} >Refresh Content</button>
      </div>
    )

  }

  return (
    <div className='App'> 
      {/* we are passing tours={tours} removeTour={removeTour} as a prop then only these both can be called from the other make js file else it wont be possible and these 2 are passed in Tcd touours*/}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App;
 