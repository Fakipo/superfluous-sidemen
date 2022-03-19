import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(  
            <div>
            <div>This is our football analytics website</div>
            <nav>
                <ul>
                    <li>
                        <Link to = "/PremierLeagueTable">Premier League Data</Link>
                    </li>
                    <li>
                        <Link to = "/listOfPeople"> People </Link>
                    </li>
                    <li>
                        <Link to = "/UsingProps">Prop</Link>
                    </li>
                </ul>
            </nav>
            </div>
    );
}

export default Navbar;