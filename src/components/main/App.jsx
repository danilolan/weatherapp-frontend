import React,{useState} from 'react'
import axios from 'axios'
import Map from '../maps/Maps'
import Search from '../search/Search';
import './App.scss';

function App() {
  const [location, setLocation] = useState({lat:-7.2206167, lng: -35.8888328})
  const [weather, setWeather] = useState({})

  function getData(data){
    setLocation(data.result.geometry.location)
    getWeather(data.result.geometry.location)
  }

  function getWeather(location){
    axios.get(`http://localhost:3001/weather?lat=${location.lat}&lng=${location.lng}`)
      .then(resp=>{
        try{
          setWeather(resp.data)
        }
        catch(error){
          console.log(error.data)
        }
      })
  }
  
  return (
    <div className="App">
      <Search getData={e=>getData(e)}/>
      <Map center={location} zoom={9}/>
    </div>
  );
}

export default App;
