import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import PersonList from '../Persons.js';
import PropUseAbuse from '../UsingProp';
import Navbar from './Navbar.js';
import PremierLeagueTable from '../PremierLeagueTable.js';

function locateNavbar(){
    return(
        <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar/></>} ></Route>
          <Route path="/PremierLeagueTable" element={ <><Navbar/><PremierLeagueTable /></>}></Route>
          <Route path="/listOfPeople" element={<><Navbar/><PersonList /></>}></Route>
          <Route path="/UsingProps" element={<><Navbar/><PropUseAbuse text = "Team Name" crax = "Drag me down" /></>}></Route>
        </Routes>
        </BrowserRouter>
     </div>
    )
}

export default locateNavbar;