import React from "react";

import ItemDetails from "../item-details";
import Record from "../item-details/record";
import { withServerData } from "../hoc-helprs/index";

const PersonDetails = (props) => {

    return (
        <ItemDetails {...props} itemName = "person">
            <Record field="name" label="Name"/>
            <Record field="eye_color" label="Eye color"/>
            <Record field="gender" label="Gender"/>
            <Record field="birth_year" label="Birth Year"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getPerson
    }
};

export default withServerData(PersonDetails, mapMethodsToProps);