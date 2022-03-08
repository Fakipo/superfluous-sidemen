import React from 'react';
import axios from 'axios';


var teamNames = [];
export default class StandingList extends React.Component {
  state = {
    teamNames1 : []
  }

  componentDidMount() {
    var options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/standings',
      params: {season: '2021', league: '39'},
      headers: {
        'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
        'x-rapidapi-key': 'c587e26207mshe5ee3942027761ep140d32jsn34a6ec8354eb'
      }
    };

    axios.request(options).then(responses => {
      const standing = responses.data.response[0].league.standings[0];
 
      console.log(standing);

      console.log(standing[0].team.name);

      
      for(var i = 0 ; i< 20 ;i++){
        teamNames.push(standing[i]);
      }

      this.setState({
        teamNames1: teamNames
      });
      console.log("teamneames === " + teamNames)
    }).catch(function (error) {
      console.error(error);
    });

/*     axios.get('https://api-football-beta.p.rapidapi.com/standings?key=c587e26207mshe5ee3942027761ep140d32jsn34a6ec8354eb')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      }) */
  }

  render() {
    console.log("here teamNames = " + teamNames);    
    return (
          this.state.teamNames1.map(function(item) {
            return (  
            <tr>
            <td>{item.rank}</td>
            <td>{item.team.name}</td>
            <td>{item.points}</td>
            <td>{item.all.played}</td>
            <td>{item.all.win}</td>
            <td>{item.all.lose}</td>
            <td>{item.all.draw}</td>
            <td>{item.form}</td>
            </tr>
            )
                  })
    )
  }
}