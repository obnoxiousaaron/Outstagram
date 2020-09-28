import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import video from "./video.mp4";
import "./App.css"
// import Modal from "./components/Modal"

function App() {
  return (
    <div className="divdiv">
      <Navbar />
      <video
        autoPlay
        loop
        muted
        style={{
          objectFit:"cover",
          width:"100vw",
          height:"100vh",
          position: "fixed",
          zIndex:"0"
        }}
        >
          <source src={video} type="video/mp4"/>
        </video>
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
