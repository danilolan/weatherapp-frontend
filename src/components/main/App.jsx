import React,{useState} from 'react'
import axios from 'axios'

import './App.scss';
import 'font-awesome/css/font-awesome.min.css'

import Map from '../maps/Maps'
import Search from '../search/Search';
import switchBackground from '../switchBackground/switchBackground';


function App() {
  const [location, setLocation] = useState({lat:-7.2206167, lng: -35.8888328})
  const [weather, setWeather] = useState({})

  const [classes, setClasses] = useState('app cloudy')



  function getData(data){
    setLocation(data.result.geometry.location)
    getWeather(data.result.geometry.location)
  }

  function getWeather(location){
    axios.get(`http://localhost:3001/weather?lat=${location.lat}&lng=${location.lng}`)
      .then(resp=>{
        try{
          setWeather(resp.data)
          
          setClasses('app ' + switchBackground(resp.data.current.condition.code))
        }
        catch(error){
          console.log(error)
        }
      })
  }
  
  

  return (
    <div className={classes}>

      <Search getData={e=>getData(e)}/>

      <div className="maincontainer">
        <div className="weathercontainer">    
          weather   
        </div>
        <div className="statscontainer">
          stats
        </div>
        <div className="locationcontainer">
          Location         
        </div>
        <div className="mapcontainer">
          <Map center={location} zoom={9}/>
        </div>
      </div>
    </div>
  );
}

export default App;
