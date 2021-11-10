import React from 'react';
import './locationcontainer.scss'

import calendar from '../../assets/calendar.png'
import clock from '../../assets/clock.png'
import latitude from '../../assets/latitude.png'
import longitude from '../../assets/longitude.png'
import placeholder from '../../assets/placeholder.png'

function LocationContainer(props) {
    const data = props.data
    if(data === undefined){
        console.log('Nao renderizou')
        return <></>
    }
    else{
        return (                      
            <div className="locationcontainer">
                <div className="title">Location</div>
                <div className="stats">
                    <table>
                       <tr>
                           <th><img src={placeholder} alt="loading" /></th>                           
                           <th>Location:</th>
                           <td>{data.location.name}, {data.location.region}, {data.location.country}</td>
                        </tr> 
                        <tr>
                            <th><img src={latitude} alt="loading" /></th>                        
                            <th>Latitude:</th>
                            <td>{data.location.lat}</td>
                        </tr> 
                        <tr>
                            <th><img src={longitude} alt="loading" /></th>
                           <th>Longitude:</th>
                           <td>{data.location.lon}</td>
                        </tr> 
                        <tr>
                            <th><img src={calendar} alt="loading" /></th>
                            <th>Data:</th>
                            <td>{data.location.localtime.split(" ")[0]}</td>
                        </tr>
                        <tr>
                            <th><img src={clock} alt="loading" /></th>
                            <th>Local time:</th>
                            <tr>{data.location.localtime.split(" ")[1]}</tr>
                        </tr>
                    </table>       
                </div>
            </div>
        );
    }
}

export default LocationContainer;