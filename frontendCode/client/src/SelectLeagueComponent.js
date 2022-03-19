import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class SelectLeague {

    render(){
     return(
        <select name = "League">
        <option value =  "Premier League">Prmier League</option>     
        </select>,

        <select name = "Country">
        <option value = "England" ></option>
        </select>
     )   
    }
}







