import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import Tweet from "../Tweets/Tweet";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
      
      {/* <Tweet /> */}
    </div>
  );
};

export default MainDash;
