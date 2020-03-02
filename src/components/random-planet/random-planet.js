import React, {Component, useContext, useEffect, useState} from 'react';

import './random-planet.css';
import Loader from "../loader";
import Error from "../error-indicator";
import ErrorBoundary from "../error-boundary";
import icon from '../../services/helpers/no.jpg';
import SwapiContext from "../swapi-service-context";



const RandomPlanet = (props) => {
    const { getPlanet } = useContext(SwapiContext);

    const [ planet, setPlanet ] = useState({});//если поставить null то при 1-ом рендере будет ошибка let {name, population, rotationPeriod, diameter} = this.state.planet;
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    const onPlanetLoaded = (planet) => {
        setLoading(false);
        setPlanet(planet);
    };

    const onError=()=> {
        setLoading(false);
        setError(true);
    };

    const updatePlanet = () => { //без стрелочной функции будет ошибка в this.interval = setInterval(this.updatePlanet, 2000)
        const id = Math.floor(Math.random()*25) + 2;

        getPlanet(id)
            .then( (planet) =>
                onPlanetLoaded(planet)
            )
            .catch(
                onError
            )
    };

    useEffect(() => {
        updatePlanet();
        const interval = setInterval(updatePlanet, 3000);
      return () => {
        clearInterval(interval);
      }
    }, []);

    return  (
        <ErrorBoundary>
            <div className="random-planet jumbotron rounded">
                { loading ? <Loader/> : null }
                { error ? <Error/> : null }
                { !loading && !error ? <PlanetView planet = {planet} /> : null }
            </div>
        </ErrorBoundary>
    );
};

const PlanetView = ({planet}) => {
    let { name, population, rotationPeriod, diameter, image} = planet;

    return (
        <>
            <img className="planet-image"
                 src={ image }
                 alt={ name } />
            <div>
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{ population }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{ rotationPeriod }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{ diameter }</span>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default RandomPlanet;