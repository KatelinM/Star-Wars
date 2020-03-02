import React, { useState } from 'react';

import './planets-page.css';
import Row from "../../row";
import {PlanetDetails, PlanetList } from "../../sw-components";

const PlanetsPage = () => {
    const [itemId, setSelectedItemId] = useState(null);
    const onItemClicked = function (id) {
        setSelectedItemId(id);
    };

    const list = (
        <PlanetList
            onItemSelected = {(id)=>{ onItemClicked(id) }}
            itemId={ itemId }
        />
    );

    const details = (
        <PlanetDetails itemId={itemId} />
    );

    return (
        <Row left={list}  right={details} />
    );
};

export default PlanetsPage;