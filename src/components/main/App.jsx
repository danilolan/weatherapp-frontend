import React from 'react'
import './App.scss';
import Map from '../maps/Maps'
import SearchInput from '../input/SearchInput';
import axios from 'axios'

function App() {
  function getData(data){
    console.log(data)
  }
  
  return (
    <div className="App">
      <div className="maincontainer">
        <SearchInput getData={e=>getData(e)}/>
        
      </div>
      <Map></Map>
    </div>
  );
}

export default App;
