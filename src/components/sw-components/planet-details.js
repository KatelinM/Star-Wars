import React from "react";

import ItemDetails from "../item-details";
import Record from "../item-details/record";
import { withServerData } from "../hoc-helprs/index";

const PlanetDetails = (props) => {

    return (
        <ItemDetails {...props} itemName = 'planet'>

            <Record field="name" label="Name"/>
            <Record field="population" label="Population"/>
            <Record field="rotation_period" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getPlanet
    }
};

export default withServerData(PlanetDetails, mapMethodsToProps);