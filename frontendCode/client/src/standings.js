import React from "react";
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api-football-beta.p.rapidapi.com/standings',
  params: {season: '2021', league: '39'},
  headers: {
    'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
    'x-rapidapi-key': 'c587e26207mshe5ee3942027761ep140d32jsn34a6ec8354eb'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});