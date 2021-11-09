import React from 'react';
import './locationcontainer.scss'

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
                           <th><i className="fa fa-map-marker"></i></th>
                           <th>Location:</th>
                           <td>{data.location.name}, {data.location.region}, {data.location.country}</td>
                        </tr> 
                        <tr>
                            <th><i className="fa fa-globe"></i></th>
                           <th>Latitude:</th>
                           <td>{data.location.lat}</td>
                        </tr> 
                        <tr>
                            <th><i className="fa fa-globe"></i></th>
                           <th>Longitude:</th>
                           <td>{data.location.lon}</td>
                        </tr> 
                        <tr>
                            <th><i className="fa fa-calendar"></i></th>
                            <th>Data:</th>
                            <td>{data.location.localtime.split(" ")[0]}</td>
                        </tr>
                        <tr>
                            <th><i className="fa fa-clock"></i></th>
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