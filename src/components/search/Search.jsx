import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './search.scss'

import key from '../../data/keys'

function Search(props) {
    const [inputV, setinputV] = useState('')
    const [placeList, setPlaceList] = useState(['Campina','Patos','Joao Pessoa'])

    useEffect(() => {
        axios.get(`http://api.weatherapi.com/v1/search.json?key=${key.weather}&q=${inputV}&aqi=no`)
            .then(resp => {
                const predictions = resp.data
                const newList = []
                try{
                    for(var i = 0; i < predictions.length; i++){
                        newList.push(predictions[i].name)
                    }
                }
                catch(error){
                    console.log(error)
                }
                setPlaceList(newList)
            
            })
    }, [inputV]);

    function renderOption(){
        return ( placeList.map(place => {
            return <option key={placeList.indexOf(place)} value={place}/>
        }))
    }

    function search(){
        var id
        try{
            id = placeList[0].place_id
        }
        catch{
            console.log('Place id não registrado')
        }
        axios.get(`http://api.weatherapi.com/v1/search.json?key=${key.weather}&q=${inputV}&aqi=no`)
            .then(resp => {
                try{
                    props.getData({lat: resp.data[0].lat, lng: resp.data[0].lon})
                }
                catch(error){
                    console.log(error)
                }
            
            })
      }

    return ( 
    <div className="searchinput">
        <input 
            type="text"
            value={inputV}
            onChange={e=>(setinputV(e.target.value))}
            list="places"
            placeholder="Ex: Campina Grande, State of Paraíba, Brazil..." 
        />
        <datalist id="places">
            {renderOption()}
        </datalist>

        <button onClick={e=>search()}>
            <i className="fa fa-search fa-2x"></i>
        </button>
    </div> );
}

export default Search;