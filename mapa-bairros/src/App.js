import React from 'react';
import './App.css';
import Header from './components/header'; 
import Sidebar from './components/sidebar'; 
import Map from './components/map';


function App() {
  return (
    <div>
 <Header></Header>
    <Sidebar></Sidebar>
    <Map markers = "{places}"></Map>
    </div>
   

   );
}

export default App;
