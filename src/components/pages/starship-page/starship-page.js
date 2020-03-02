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
        />

    );

    const details = (
        <StarshipDetails itemId={itemId} />
    );

    return (
        <Row left={list}  right={details} />
    );
};

export default StarshipPage;