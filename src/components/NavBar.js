import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../containers/Modal";
import "./NavBar.css";

export default function Navbar() {

  const [loggedIn, setLogin] = useState(localStorage.getItem("token"))
	
	const handleLogout = () => {
		localStorage.removeItem("token")
		setLogin(false)
	}

  return (
    <div className="navbar-div">
      <div className="logodiv" style={{ display: "flex" }}>
        <img
          alt="logo"
          className="img"
          src="https://i.pinimg.com/originals/8a/77/05/8a770507298d728a1e3e039a0507dd8e.png"
        />
        <h2 className="logoh2" style={{ margin: "10px" }}><a className="logolink" href=".divdiv">Outstagram</a></h2>
      </div>
      <div className="header">
        <div className="inputstyle">
          <input type="text" placeholder="Search user..."></input>
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
        </div>
        <button className="navBtns">Search</button>
        <button className="navBtns" href="#">
          <Link className="onHover" style={{textDecoration:"none", color:"white"}} to="/">
            Home
          </Link>
        </button>
        {
		  	localStorage.getItem("token") ?
		  	<Link to="/users/me" >Profile</Link>
		  	: null
        }
        {
          loggedIn ? <button className="navBtns" onClick={handleLogout}>Logout</button> : <Modal setLogin={setLogin}/>
        }       
      </div>
    </div>
);
}
