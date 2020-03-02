import React  from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import {PeoplePage, PlanetsPage, StarshipPage} from "../pages";
import Test from "../test";
import {PersonDetails, PlanetDetails, StarshipDetails} from "../sw-components";
import ErrorBoundary from "../error-boundary";
import SwapiContext from "../swapi-service-context";
import SwapiService from "../../services/api";

const swapi = new SwapiService();

const App = () => {
    return (
        <ErrorBoundary>
            <SwapiContext.Provider value={swapi}>
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
                            path="/test/"
                            component={Test}
                            exact />

                        <Route render={() => <h2>Page not found</h2>}/>
                    </Switch>
                </BrowserRouter>
            </SwapiContext.Provider>
        </ErrorBoundary>
    );
};

export default App;