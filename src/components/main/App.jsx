import React from 'react'
import './App.scss';
import Map from '../maps/Maps'
import SearchInput from '../input/SearchInput';
import axios from 'axios'

function App() {
  function search(){
    console.log('Procurar')
  }
  return (
    <div className="App">
      <div className="maincontainer">
        <SearchInput></SearchInput>
        <button onClick={e=>search()}>Pesquisar</button>
      </div>
      <Map></Map>
    </div>
  );
}

export default App;
