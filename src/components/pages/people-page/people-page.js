import React, { useState } from 'react';

import './people-page.css';
import SwapiService from "../../../services/api";
import Row from "../../row";
import ErrorBoundary from "../../error-boundary/index";
import {PersonDetails, PersonList} from "../../sw-components";

const PeoplePage = () => {
    const [itemId, setSelectedItemId] = useState(null);
    const onItemClicked = function (id) {
        setSelectedItemId(id);
    };
    const swapi = new SwapiService()

    const list = (
        <ErrorBoundary>
        <PersonList
            onItemSelected = {(id)=>{ onItemClicked(id) }}
            itemId={itemId}
        >
            {({name, birthYear})=>`${name} (${birthYear})`}
        </PersonList>
        </ErrorBoundary>

    );
    const details = (
        <ErrorBoundary>
            <PersonDetails itemId={itemId}
                         getData = {swapi.getPerson}
                         getImage = {swapi.getPersonImage}
                         itemName = 'person'/>
        </ErrorBoundary>
    );

    return (
        <Row left={ list } right={ details } />
    );
};

export default PeoplePage;