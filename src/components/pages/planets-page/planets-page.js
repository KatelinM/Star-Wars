import React, { useState } from 'react';

import './planets-page.css';
import Row from "../../row";
import {PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../../sw-components";

const PlanetsPage = () => {
    const [itemId, setSelectedItemId] = useState(null);
    const onItemClicked = function (id) {
        setSelectedItemId(id);
    };

    const list = (
        <PlanetList
            onItemSelected = {(id)=>{ onItemClicked(id) }}
            itemId={itemId}
        >
         {({name, max_atmosphering_speed, passengers})=>(
            <span>
                {name } (
                    {max_atmosphering_speed !== 'n/a' ? `${max_atmosphering_speed} м/с, `:null}
                    {passengers !== '0' ? `${passengers} passengers`:null}
                )
            </span>
        )}
        </PlanetList>
    );

    const details = (
        <PlanetDetails itemId={itemId} />
    );

    return (
        <Row left={list}  right={details} />
    );
};

export default PlanetsPage;