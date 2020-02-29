import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import SwapiService from "../../services/api";
import PeoplePage from "../people-page";
import StarshipPage from "../starship-page";

const App = () => {
    const [itemId, setSelectedItemId] = useState(null);
    const onItemClicked = function (id) {
        setSelectedItemId(id);
    };
    const swapi = new SwapiService()

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