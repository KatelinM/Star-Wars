import React from "react";

import ItemDetails from "../item-details";
import Record from "../item-details/record";
import { withServerData } from "../hoc-helprs/index";

const PersonDetails = ({ itemId, swapi}) => {
    const { getPerson } = swapi;

    return (
        <ItemDetails
            itemId = { itemId }
            getData = { getPerson }
            itemName = "person">

            <Record field="name" label="Name"/>
            <Record field="eye_color" label="Eye color"/>
            <Record field="gender" label="Gender"/>
            <Record field="birth_year" label="Birth Year"/>
        </ItemDetails>
    )
};

const PersonDetailsWD = withServerData(PersonDetails);

export default PersonDetailsWD;