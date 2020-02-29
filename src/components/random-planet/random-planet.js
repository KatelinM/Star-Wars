import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from "../../services/api";
import Loader from "../loader";
import Error from "../error-indicator/index";

let swapi = new SwapiService();

export default class RandomPlanet extends Component {

  state = {
    planet: {},//если поставить null то при 1-ом рендере будет ошибка let {name, population, rotationPeriod, diameter} = this.state.planet;
    loading: true,
    error: false,
  };

  onPlanetLoaded(planet) {
    this.setState({
      planet,
      loading: false,
    })
  }

  onError=()=> {
    this.setState({
      error: true,
      loading: false,
    })
  }

  updatePlanet = () => { //без стрелочной функции будет ошибка в this.interval = setInterval(this.updatePlanet, 2000)
    const id = Math.floor(Math.random()*25) + 2;

    swapi.getPlanet(id)
        .then( (planet) =>
            this.onPlanetLoaded(planet)
        )
        .catch(
            this.onError
        )
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    let {loading, error, planet} = this.state;

    return  (
        <div className="random-planet jumbotron rounded">
          { loading ? <Loader/> : null }
          { error ? <Error/> : null }
          { !loading && !error ? <PlanetView planet = {planet} /> : null }
        </div>

    );
  }
}

const PlanetView = ({planet}) => {
  let {id, name, population, rotationPeriod, diameter} = planet;

  return (
      <>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </>
  )
}
