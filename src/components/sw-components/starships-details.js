import React from "react";

import ItemDetails from "../item-details";
import Record from "../item-details/record";
import { withServerData } from "../hoc-helprs/index";

const StarshipDetails =  ({ itemId, swapi }) => {
    let { getStarship } = swapi;

    return (
        <ItemDetails
            itemId = { itemId }
            getData = { getStarship }
            itemName = 'starship'>

            <Record field="name" label="Name"/>
            <Record field="max_atmosphering_speed" label="Speed"/>
            <Record field="passengers" label="Passengers"/>
            <Record field="cost_in_credits" label="Cost"/>
        </ItemDetails>
    )
};

const StarshipDetailsWD = withServerData(StarshipDetails);

export default StarshipDetailsWD;