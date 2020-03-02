import React from "react";

import ItemDetails from "../item-details";
import SwapiService from "../../services/api";
import Record from "../item-details/record";

const swapi = new SwapiService();
let{
    getPerson,
    getPlanet,
    getStarship,
} = swapi;

function withDataDetails() {
    return class extends React.Component {

         render() {
             return ;
         }
    }
}

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId = {itemId}
            getData = {getPerson}
            itemName = "person">

            <Record field="name" label="Name"/>
            <Record field="eye_color" label="Eye color"/>
            <Record field="gender" label="Gender"/>
            <Record field="birth_year" label="Birth Year"/>
        </ItemDetails>
    )
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData = {getPlanet}
            itemName = 'planet'>

            <Record field="name" label="Name"/>
            <Record field="population" label="Population"/>
            <Record field="rotation_period" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    )
};

const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData = {getStarship}
            itemName = 'starship'>

            <Record field="name" label="Name"/>
            <Record field="max_atmosphering_speed" label="Speed"/>
            <Record field="passengers" label="Passengers"/>
            <Record field="cost_in_credits" label="Cost"/>
        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
}