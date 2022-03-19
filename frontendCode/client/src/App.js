import React from 'react';
import './App.css';
import PremierLeagueTable from './PremierLeagueTable';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PersonList from './Persons.js';
import PropUseAbuse from './UsingProp';
import Navbar from './Navbar/Navbar';
import LocateNavbar from './Navbar/LocateNavbarRoutes';
class App extends React.Component{
render(){
  return (
    <LocateNavbar/>
  );
}
}
export default App;
