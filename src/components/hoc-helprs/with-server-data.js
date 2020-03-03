import React from "react";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/api";

const withServerData = (View, mapMethodsToProps) => {

    return (props) => {
        const swapi = new SwapiService();

        return (
            <ErrorBoundary>
                <View {...props} {...mapMethodsToProps(swapi)} />
            </ErrorBoundary>
        )
    }
};

export default withServerData;