import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './search.scss'

function Search(props) {
    const [inputV, setinputV] = useState('')
    const [placeList, setPlaceList] = useState(['Campina','Patos','Joao Pessoa'])

    useEffect(() => {
        axios.get(`http://localhost:3001/autocomplete?string=${inputV}`)
            .then(resp => {
                const predictions = resp.data.predictions
                const newList = []
                try{
                    for(var i = 0; i < predictions.length; i++){
                        newList.push(predictions[i])
                    }
                }
                catch{

                }
                setPlaceList(newList)
            
            })
    }, [inputV]);

    function renderOption(){
        return ( placeList.map(place => {
            return <option key={placeList.indexOf(place)} value={place.description}/>
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
        axios.get(`http://localhost:3001/search?id=${id}`)
            .then(resp => {
                try{
                    props.getData(resp.data)
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