import React from "react";

import {
    UseContext,
} from './use-context';
import TestMenu from "./menu";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../header";
import RandomPlanet from "../random-planet";

const Test = () =>{
    return(
         <>
            <BrowserRouter>
                <TestMenu />

                <Switch>
                    <Route
                        path="/test/use-context/"
                        component={ UseContext }
                        exact />
                </Switch>
            </BrowserRouter>
         </>
    );
};

export default Test;