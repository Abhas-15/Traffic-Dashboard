import "./App.css";
import Sidebar from "./components/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TweetFeed from "./components/Tweets/TweetFeed";
import RuleList from "./components/Tweets/RuleList";
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      <BrowserRouter>
        <Sidebar />
        {/* <MainDash /> */}
        <Routes>
            <Route exact path="/" element={<MainDash />} />
            <Route exact path="/rules" element={<RuleList />} />
            <Route exact path="/tweets" element={<TweetFeed />} />
        </Routes>
        
      </BrowserRouter>
        {/* <RightSide /> */}
      </div>
    </div>
  );
}

export default App;
