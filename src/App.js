import "./App.css";
import Sidebar from "./components/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Roads from "./components/Roads/Roads";
import MapSection from './components/map/Map'

const location = {
  address: 'Bengaluru, India',
  lat: 12.9719,
  lng: 77.5937,
}

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      <BrowserRouter>
        <Sidebar />
        {/* <MainDash /> */}
        <Routes>
            <Route exact path="/" element={<MainDash />} />
            <Route exact path="/roads" element={<Roads />} />
            {/* <Route exact path="/tweets" element={<TweetFeed />} /> */}
        </Routes>
        <MapSection location={location} zoomLevel={17} />
        
      </BrowserRouter>
        {/* <RightSide /> */}
      </div>
    </div>
  );
}

export default App;
