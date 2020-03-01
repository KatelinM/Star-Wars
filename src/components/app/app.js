import React  from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from "../people-page";
import StarshipPage from "../starship-page";
import UseCon from "../../use-context";

const App = () => {
    return (
        <BrowserRouter>
            <UseCon/>
            <Header />
            <RandomPlanet />


            <PeoplePage />
            <StarshipPage />
        </>
    );
};

export default App;