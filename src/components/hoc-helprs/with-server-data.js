import React from "react";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/api";

const withServerData = (View) => {

    return (props) => {
        const swapi = new SwapiService();

        return (
            <ErrorBoundary>
                <View {...props} swapi = {swapi} />
            </ErrorBoundary>
        )
    }
};

export default withServerData;