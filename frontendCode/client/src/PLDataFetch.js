import React from "react";
var axios = require("axios");
export default class PLStandings extends React.Component{
componentDidMount(){
    axios.get("http://api.football-data.org/v2/competitions/2021/standings")
.then((response) => {
    console.log(
        response
    );
    });
}
}