import React,{useState} from 'react'
import './App.scss';
import Map from '../maps/Maps'
import Search from '../search/Search';
import axios from 'axios'

function App() {
  const [location, setLocation] = useState({lat:-7.2206167, lng: -35.8888328})

  function getData(data){
    setLocation(data.result.geometry.location)
    console.log(data)
  }
  
  return (
    <div className="App">
      <Search getData={e=>getData(e)}/>
      <Map center={location} zoom={9}/>
    </div>
  );
}

export default App;
