import React from 'react';
import './App.css';
import PremierLeagueTable from './PremierLeagueTable';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PersonList from './Persons.js';
import PropUseAbuse from './UsingProp';


class App extends React.Component{
render(){
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<PremierLeagueTable />}></Route>
          <Route path="/abc" element={<PersonList />}></Route>
          <Route path="/are" element={<PropUseAbuse text = "Team Name" crax = "Drag me down" />}></Route>
        </Routes>
      </BrowserRouter>
  );
}
}
export default App;
