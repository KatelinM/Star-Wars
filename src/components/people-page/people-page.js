import React, { useState } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './people-page.css';
import SwapiService from "../../services/api";
import Row from "../row";
import ErrorBoundary from "../error-boundary/index";

const PeoplePage = () => {
    const [itemId, setSelectedItemId] = useState(null);
    const onItemClicked = function (id) {
        setSelectedItemId(id);
    };
    const swapi = new SwapiService()

    const list = (
        <ErrorBoundary>
        <ItemList
            onItemSelected = {(id)=>{ onItemClicked(id) }}
            getData = {swapi.getAllPeople}
            itemId={itemId}
        >
            {({name, birthYear})=>`${name} (${birthYear})`}
        </ItemList>
        </ErrorBoundary>

    );
    const details = (
        <ErrorBoundary>
            <ItemDetails itemId={itemId}
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