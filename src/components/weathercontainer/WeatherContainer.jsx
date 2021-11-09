import React, {useState} from 'react';
import MainWeather from './mainweather/MainWeather';
import './weathercontainer.scss'

function WeatherContainer(props) {
    const [classes, setClasses] = useState('levelcurrent')

    return ( 
    <div className="weathercontainer">
        <div className={"buttoncont " + classes}> 
            <button className="btncurrent" onClick={e=>setClasses('levelcurrent')}>Current</button>
            <button className="btnhourly" onClick={e=>setClasses('levelhourly')}>Hourly</button>
            <button className="btntendays" onClick={e=>setClasses('leveltendays')}>10 days</button>
        </div>
        <div className='content'>
            <div className={classes}>
                <div className="current">
                    <MainWeather data={props.currentWeather}/>
                </div>
                <div className="hourly">
                    <MainWeather data={props.currentWeather}/>
                </div>
                <div className="tendays">
                    <MainWeather data={props.currentWeather}/>
                </div>
            </div>
        </div>
    </div> );
}

export default WeatherContainer;