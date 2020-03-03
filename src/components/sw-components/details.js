import React from "react";

import ItemDetails from "../item-details";
import Record from "../item-details/record";
import { withServerData } from "../hoc-helprs/index";

const PersonDetails = (props) => {
    const { itemId, swapi} = props;

    return (
        <ItemDetails
            itemId = { itemId }
            getData = { swapi.getPerson }
            itemName = "person">

            <Record field="name" label="Name"/>
            <Record field="eye_color" label="Eye color"/>
            <Record field="gender" label="Gender"/>
            <Record field="birth_year" label="Birth Year"/>
        </ItemDetails>
    )
};

const PlanetDetails = (props) => {
    const { itemId, swapi} = props;

    return (
        <ItemDetails
            itemId={ itemId }
            getData = { swapi.getPlanet }
            itemName = 'planet'>

            <Record field="name" label="Name"/>
            <Record field="population" label="Population"/>
            <Record field="rotation_period" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    )
};

const StarshipDetails =  (props) => {
    const { itemId, swapi } = props;
    return (
        <ItemDetails
            itemId = { itemId }
            getData = { swapi.getStarship }
            itemName = 'starship'>

            <Record field="name" label="Name"/>
            <Record field="max_atmosphering_speed" label="Speed"/>
            <Record field="passengers" label="Passengers"/>
            <Record field="cost_in_credits" label="Cost"/>
        </ItemDetails>
    )
};

const PersonDetailsWD = withServerData(PersonDetails);
const PlanetDetailsWD = withServerData(PlanetDetails);
const StarshipDetailsWD = withServerData(StarshipDetails);

export {
    PersonDetailsWD,
    PlanetDetailsWD,
    StarshipDetailsWD,
}