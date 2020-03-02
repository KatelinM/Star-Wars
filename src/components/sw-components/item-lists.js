import React from "react";

import SwapiService from "../../services/api";
import {withData} from "../hoc-helprs";
import ItemList from "../item-list";

const swapi = new SwapiService();
const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapi;

const withChild = (View, child) => {
    return (props) => {
        return (
            <View {...props}>
                {child}
            </View>
        )
    }
};

const PersonList = withData( withChild(
    ItemList,
    ({ name, birth_year }) => `${ name } (${ birth_year })`
), getAllPeople);

const PlanetList = withData( withChild(
    ItemList,
    ({ name, diameter }) => `${ name } (${ diameter }km)`
), getAllPlanets);

const StarshipList = withData( withChild(
    ItemList,
    ({ name, passengers }) => `${ name } (${ passengers } passengers )`
), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList,
}