import React from "react";

import {
    UseContext,
} from './use-context';
import TestMenu from "./menu";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ReduxTest} from "./redux/redux";

const Test = () =>{
    return(
         <>
            <BrowserRouter>
                <TestMenu />

                <Switch>
                    {/*<Route*/}
                    {/*    path="/test/use-context/"*/}
                    {/*    component={ UseContext }*/}
                    {/*    exact />*/}
                    <Route
                        path="/test"
                        component={ ReduxTest }
                        exact />
                </Switch>
            </BrowserRouter>
         </>
    );
};

export default Test;