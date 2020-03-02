import React, { useState } from 'react';

import './starship-page.css';
import Row from "../../row";
import { StarshipDetails, StarshipList } from "../../sw-components";

const StarshipPage = () => {
    const [itemId, setSelectedItemId] = useState(null);
    const onItemClicked = function (id) {
        setSelectedItemId(id);
    };

    const list = (
        <StarshipList
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
        </StarshipList>
    );

    const details = (
        <StarshipDetails itemId={itemId} />
    );

    return (
        <Row left={list}  right={details} />
    );
};

export default StarshipPage;