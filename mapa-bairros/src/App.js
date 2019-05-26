import React from 'react';
import './App.css';
import Header from './components/header'; 
import Sidebar from './components/sidebar'; 
import MapContainer from './components/mapContainer';
import FakeMap from './fakeMap';



function App() {

//    <MapContainer markers = "{places}"></MapContainer>
//    <FakeMap></FakeMap>


  return (
    <div>
 <Header></Header>
    <Sidebar></Sidebar>
    <MapContainer markers = "{places}"></MapContainer>    
    </div>
   
   );
}

export default App;
