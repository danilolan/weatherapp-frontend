import React,{useState,useEffect} from 'react'
import axios from 'axios'

import './App.scss';
import 'font-awesome/css/font-awesome.min.css'

import Map from '../maps/Maps'
import Search from '../search/Search';
import WeatherContainer from '../weathercontainer/WeatherContainer';
import switchBackground from './switchBackground/switchBackground';
import LocationContainer from '../locationcontainer/LocationContainer';
import StatsContainer from '../statscontainer/StatsContainer';
import Footer from '../footer/Footer'

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

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
          delayLoading()      
        }
        catch(error){
          console.log(error)
        }              
      })
  }, [location])

  function search(location){
    setLoadingDone(false)
    setLocation(location)
  }

  async function delayLoading() {
    console.log('start timer');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoadingDone(true)
    console.log('after 2 second');
  }
  

  return ( loadingDone ?
    <div className={classes}>

      <Search getData={e=>search(e)}/>

      <div className="maincontainer">
        <WeatherContainer currentWeather={weather}/>
        <LocationContainer data={weather}/>
        <StatsContainer data={weather}/>
        <div className="mapcontainer">
          <Map center={location} zoom={9}/>
        </div>
      </div>

      <Footer></Footer>

    </div>
    :
    <div className="loading">
      <div className="circleout">
        <div className="circlein"></div>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default App;
