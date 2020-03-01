import ItemDetails from "../item-details";
import React from "react";
import SwapiService from "../../services/api";

const swapi = new SwapiService();
let{
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
} = swapi;

const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getData = {getPerson}
                     getImage = {getPersonImage}
                     itemName = 'person'/>
    )
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getData = {getPlanet}
                     getImage = {getPlanetImage}
                     itemName = 'person'/>
    )
};

const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getData = {getStarship}
                     getImage = {getStarshipImage}
                     itemName = 'person'/>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
}