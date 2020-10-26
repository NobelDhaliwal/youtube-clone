import React from 'react';
import Header from "./Components/Header.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import RecommendedVideos from "./Components/RecommendedVideos.jsx";
import "./App.css";
import SearchPage from "./Components/SearchPage.jsx";
import {Switch,Route,BrowserRouter as Router} from "react-router-dom";
import "./Components/Sidebar.css";
import "./Components/VideoCard.css";
import "./Components/Header.css";

const App =()=> {
  return (
    <>
    <div className="App">
     <Router>
     <Header/>
       <Switch>
        <Route path="/search/:searchTerm">
        <div className="App_page">
       <Sidebar/>
      <SearchPage/> 
        </div>
        </Route>

        <Route path="/">
        <div className="App_page">
       <Sidebar/>
      <RecommendedVideos/> 
        </div>
       </Route>
       </Switch>
       </Router>
   {/* <Header/>
    <div className="App_page">
  <Sidebar/>
  <RecommendedVideos/>  */}
   </div>
    </>
  );
};

export default App;
