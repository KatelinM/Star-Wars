import React  from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import {PeoplePage, PlanetsPage, StarshipPage} from "../pages";
import UseCon from "../test/use-context";
import {PersonDetails, PlanetDetails, StarshipDetails} from "../sw-components";
import SwapiService from "../../services/api";

const App = () => {
    const swapi = new SwapiService();

    return (
        <>
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route
                        path="/"
                        render={() => (
                            <><RandomPlanet/><h2>Welcome!</h2></>
                        )}
                        exact />

                    <Route
                        path="/people/"
                        component={PeoplePage}
                        exact />

                    <Route
                        path="/starships/"
                        component={StarshipPage}
                        exact />

                    <Route
                        path="/planets/"
                        component={PlanetsPage}
                        exact />

                    <Route
                        path="/people/:id/"
                        render = {
                            ({ match }) => <PersonDetails itemId = { match.params.id } />
                        }
                        exact />

                    <Route
                        path="/planets/:id/"
                        render = {
                            ({ match }) => <PlanetDetails itemId = { match.params.id } />
                        }
                        exact />

                    <Route
                        path="/starships/:id/"
                        render = {
                            ({ match }) => <StarshipDetails itemId = { match.params.id } />
                        }
                        exact />

                    <Route
                        path="/test/use-context/"
                        component={UseCon}
                        exact />

                     <Route render={() => <h2>Page not found</h2>}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;