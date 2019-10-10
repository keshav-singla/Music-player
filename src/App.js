import React from 'react';
import './App.css';
import Player from "./components/player"
import Appbar from "./components/appBar"
import SearchList from './components/searchList';

function App() {
  return (
    <div >
      <Appbar />
      <Player />
      <SearchList />
    </div>
  );
}

export default App;
