import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './searchinput.scss'

function SearchInput(props) {
    const [inputV, setinputV] = useState('')
    const [placeList, setPlaceList] = useState(['Campina','Patos','Joao Pessoa'])

    useEffect(() => {
        const search = { search: inputV }
        axios.post('http://localhost:3001/autocomplete', search)
            .then(resp => {
                const predictions = resp.data.predictions
                const newList = []
                try{
                    for(var i = 0; i < predictions.length; i++){
                        newList.push(predictions[i].description)
                    }
                }
                catch{
                    setPlaceList([])
                }
                setPlaceList(newList)
            
            })
    }, [inputV]);

    function renderOption(){
        return ( placeList.map(place => {
            return <option key={placeList.indexOf(place)} value={place}/>
        }))
    }

    return ( 
    <div className="searchinput">
        <input 
            type="text"
            value={inputV}
            onChange={e=>(setinputV(e.target.value))}
            list="places" 
        />

        <datalist id="places">
            {renderOption()}
        </datalist>
    </div> );
}

export default SearchInput;