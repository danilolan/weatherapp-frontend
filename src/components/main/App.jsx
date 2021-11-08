import React,{useState,useEffect} from 'react'
import axios from 'axios'

import './App.scss';
import 'font-awesome/css/font-awesome.min.css'

import Map from '../maps/Maps'
import Search from '../search/Search';
import WeatherContainer from '../weathercontainer/WeatherContainer';
import switchBackground from '../switchBackground/switchBackground';


function App() {
  const [location, setLocation] = useState({lat:-7.2206167, lng: -35.8888328})
  const [classes, setClasses] = useState('app cloudy')
  const [weather, setWeather] = useState(()=>{
    axios.get(`http://localhost:3001/weather?lat=${location.lat}&lng=${location.lng}`)
      .then(resp=>{
        try{
          setClasses('app ' + switchBackground(resp.data.current.condition.code))
          return resp.data
        }
        catch(error){
          console.log(error)
        }
      })
  })
  

  useEffect(() => {
    axios.get(`http://localhost:3001/weather?lat=${location.lat}&lng=${location.lng}`)
      .then(resp=>{
        try{
          setClasses('app ' + switchBackground(resp.data.current.condition.code))
          setWeather(resp.data)
        }
        catch(error){
          console.log(error)
        }
      })
  }, [location])

  return (
    <div className={classes}>

      <Search getData={e=>setLocation(e)}/>

      <div className="maincontainer">
        <WeatherContainer currentWeather={weather}/>
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
