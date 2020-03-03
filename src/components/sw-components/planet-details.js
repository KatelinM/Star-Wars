import React from "react";

import ItemDetails from "../item-details";
import Record from "../item-details/record";
import { withServerData } from "../hoc-helprs/index";

const PlanetDetails = ({ itemId, swapi}) => {
    const { getPlanet } = swapi;

    return (
        <ItemDetails
            itemId = { itemId }
            getData = { getPlanet }
            itemName = 'planet'>

            <Record field="name" label="Name"/>
            <Record field="population" label="Population"/>
            <Record field="rotation_period" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    )
};

const PlanetDetailsWD = withServerData(PlanetDetails);

export default PlanetDetailsWD;