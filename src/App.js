import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import "./App.css"
// import Modal from "./components/Modal"

function App() {
  return (
    <div className="divdiv">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users/:id" component={UserProfilePage} />      
      </Switch>
      <footer>
        <small>
          All Rights Reserved @ Outstagram 2020
        </small>
      </footer>
    </div>
  );
}

export default App;
