import React from 'react';
import './App.css';
import {tableData, teamNumber} from './DefaultValues';
import JsonData from './PremierLeagueData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import StandingList from './StandingsInClass.js';
import CountryLeague from './InputLeagueName.js';

console.log("three fpor");

const displayData = JsonData.map((info) => {
  return(
    <tr>
      <td>{info.id}</td>
      <td>{info.teamName}</td>
      <td>{info.points}</td>
    </tr>
  )
}
)



class PremierLeagueTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse : ""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }
  componentWillMount(){
    this.callAPI();
  }
render(){
  return (
    <div className="App">
      <h2>Hello this is the home page</h2>
      <p>{this.state.apiResponse}</p>
      <CountryLeague/>
      <button className="btn btn-success">Click here to get the tables</button>
      <table className = "table">
        <thead>
        <tr>
        <th> S. no</th>
        <th>Team Name</th>
        <th>Points </th>
        <th>Games Played</th>
        <th>Wins</th>
        <th>Loses</th>
        <th>Draws</th>
        <th>Form</th>
        </tr>
        </thead>
        <tbody>
        {/*{displayData}*/}
        <StandingList/>
        </tbody>
      </table>
    </div>    
  );
}
}
export default PremierLeagueTable;
