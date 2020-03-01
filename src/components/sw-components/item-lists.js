import SwapiService from "../../services/api";
import {withData} from "../hoc-helprs";
import ItemList from "../item-list";

const swapi = new SwapiService();
const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapi;

const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList,
}