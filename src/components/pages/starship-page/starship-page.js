import React, { useState } from 'react';

import './starship-page.css';
import SwapiService from "../../../services/api";
import Row from "../../row";
import { StarshipDetails, StarshipList } from "../../sw-components";

const StarshipPage = () => {
    const [itemId, setSelectedItemId] = useState(null);
    const onItemClicked = function (id) {
        setSelectedItemId(id);
    };
    const swapi = new SwapiService();

    const list = (
        <StarshipList
            onItemSelected = {(id)=>{ onItemClicked(id) }}
            itemId={itemId}
        >
         {({name, speed, passengers})=>(
            <span>
                {name } (
                    {speed !== 'n/a' ? `${speed} м/с, `:null}
                    {passengers !== '0' ? `${passengers} passengers`:null}
                )
            </span>
        )}
        </StarshipList>
    );

    const details = (
        <StarshipDetails
            itemId={itemId}
            getData = {swapi.getStarship}
            getImage = {swapi.getStarshipImage}
            itemName = 'starship'/>
    );


    return (
        <Row left={list}  right={details} />
    );
};

export default StarshipPage;