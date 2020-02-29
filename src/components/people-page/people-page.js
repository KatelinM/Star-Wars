import React, { useState } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './people-page.css';
import SwapiService from "../../services/api";

const PeoplePage = () => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const onItemClicked = function (id) {
        setSelectedItemId(id);
    };
    const swapi = new SwapiService()

    return (
        <>
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected = {(id)=>{ onItemClicked(id) }}
                        getData = {swapi.getAllPeople}
                        renderItem = {({name, birthYear})=>`${name} (${birthYear})`}
                        selectedItemId={selectedItemId}/>
                </div>
                <div className="col-md-6">
                    <ItemDetails selectedItemId={selectedItemId} />
                </div>
            </div>
        </>
    );
};

export default PeoplePage;