import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return(      
            <div className="topnav"> 
            <ul  className="list-group list-group-horizontal" style = {{listStyleType: "none"}}>
                    <li className="list-group-item-info">  
                        <Link to = "/PremierLeagueTable" style={{ textDecoration: 'none', color: "black" }}>Premier League Data</Link>
                    </li>
                    <li className="list-group-item-warning">
                        <Link to = "/listOfPeople" style={{ textDecoration: 'none', color: "black" }}> People </Link>
                    </li>
                    <li className="list-group-item-danger">
                        <Link to = "/UsingProps" style={{ textDecoration: 'none', color: "black" }}>Prop</Link>
                    </li>
            </ul> 
            </div>
            
    );
}

export default Navbar;