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
      params: {season: '2019', league: '39'},
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
        teamNames.push(standing[i].team.name);
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
    const abc = teamNames.map(data => {
      return data;
    }
    )
    console.log("here teamNames = " + teamNames);    
    return (
      <ul>
        {              
          teamNames.map(function(item) {
            return <li key={item}>{item}</li>;
          })
        }
      </ul>
    )
  }
}