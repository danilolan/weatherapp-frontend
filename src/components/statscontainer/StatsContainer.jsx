import React, {useState} from 'react';
import './statscontainer.scss'

import arrow from '../../assets/arrow.png'
import drop from '../../assets/drop.png'
import rays from '../../assets/rays.png'

function StatsContainer(props) {
    const data = props.data

    if(data === undefined){
        console.log('Nao renderizou')
        return <></>
    }
    else{
        return ( 
            <div className="statscontainer">
                <div className="title">Stats</div>
                <div className="stats">
                    <div className="umid">
                        <div className="title">Humidity</div>
                        <div className="watercontainer">
                            <div className="valor">{data.current.humidity}%</div>
                            <div className="water" style={{transform: `translateY(${100 - data.current.humidity}px)`}}></div>
                        </div>
                    </div>
                    <div className="wind">
                        <div className="title">Wind</div>
                        <div className="compasscontainer">
                            <div className="markers">                           
                                <div className="n">N</div>
                                <div className="e">E</div>
                                <div className="s">S</div>
                                <div className="w">W</div>
                            </div>
                            <div className="compass" style={{transform: `rotate(${data.current.wind_degree-45}deg)`}}>
                                <img src={arrow} alt="loading.." />
                               {/*  <div className="pointer" >
                                </div>
                                <div className="left"></div>
                                <div className="right"></div> */}
                            </div>               
                        </div>
                        <div className="display">
                            <table>
                                <tr>
                                    <th>Degree:</th>
                                    <td>{data.current.wind_degree}º</td>
                                </tr>
                                <tr>
                                    <th>Velocity:</th>
                                    <td>{data.current.wind_kph} km/h</td>
                                </tr>
                                <tr>
                                    <th>Direction:</th>
                                    <td>{data.current.wind_dir}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="otherstats">
                        <div className="precip">
                            <img src={drop} alt="loading" />
                            <div className="value">
                                <table>
                                    <tr>
                                        <th>Precipitation:</th>
                                    </tr>
                                    <tr>
                                        <td>{data.current.precip_mm} mm</td>
                                    </tr>
                                </table>                                                
                            </div>
                        </div>
                        <div className="uv">
                            <img src={rays} alt="loading" />
                                <div className="value">
                                    <table>
                                        <tr>
                                            <th>Uv index:</th>
                                        </tr>
                                        <tr>
                                            <td>{data.current.uv}</td>
                                        </tr>
                                    </table>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
         );
        }

}

export default StatsContainer;