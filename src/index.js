import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/index';
import SwapiService from "./services/api";

const swapi = new SwapiService();

ReactDOM.render(<App />, document.getElementById('root'));

swapi.getPerson(1).then(r => console.log(r))
swapi.getAllPeople().then(r => console.log(r))
swapi.getPlanet(1).then(r => console.log(r))
swapi.getAllPlanets().then(r => console.log(r))



