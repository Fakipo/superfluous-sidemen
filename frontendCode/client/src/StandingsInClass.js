import React from 'react';
import axios from 'axios';

export default class StandingList extends React.Component {
  state = {
    standings: []
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

    axios.request(options).then(function (responses) {
      const standing = responses.data;
      console.log(standing.response);
      console.log(standing.response[0].league.country);
      this.setState({standing});
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
    return (
      <ul>
        {
          this.state.standings
            .map(standing =>
              <li>{standing.response[0].country}</li>
            )
        }
      </ul>
    )
  }
}