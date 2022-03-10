import React from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class CountryLeague extends React.Component{
    render(){
        return(
            <div>
            <select name = "Country">
                <option value = "England">England</option>
                <option value = "Italy">Italy</option>    
            </select>
            <select name = "League" >
                <option value = "Premier League">Premier League</option>
                <option value = "Serie A">Serie A</option>
            </select>
            </div>
        )}
}