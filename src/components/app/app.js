import React  from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from "../people-page";
import StarshipPage from "../starship-page";

const App = () => {
    return (
        <>
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <StarshipPage />
        </>
    );
};

export default App;