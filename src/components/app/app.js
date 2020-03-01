import React  from 'react';
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import {PeoplePage, StarshipPage } from "../pages";
import UseCon from "../../use-context";
import {PersonDetails} from "../sw-components";
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
                        path="/people"
                        component={PeoplePage}
                        exact />

                    <Route path="/people/:id"
                           render={
                               ({ match }) => {
                                    return (
                                        <PersonDetails
                                           itemId={ match.params.id }
                                           getData = {swapi.getPerson}
                                           getImage = {swapi.getPersonImage}
                                           itemName = 'person'/>
                                           )
                               }
                           }

                        exact />

                    <Route
                        path="/starships"
                        component={StarshipPage}
                        exact />

                    <Route
                        path="/starships/:id"
                        component={StarshipPage}
                        exact />

                    <Route
                        path="/test/use-context"
                        component={UseCon}
                        exact />

                     <Route render={() => <h2>Page not found</h2>}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;