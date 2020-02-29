import React, { useState } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './starship-page.css';
import SwapiService from "../../services/api";
import Row from "../row";

const StarshipPage = () => {
    const [itemId, setSelectedItemId] = useState(null);
    const onItemClicked = function (id) {
        setSelectedItemId(id);
    };
    const swapi = new SwapiService()

    const list = (
                     <ItemList
                        onItemSelected = {(id)=>{ onItemClicked(id) }}
                        getData = {swapi.getAllStarships}
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
                     </ItemList>
    )

    const details = (
        <ItemDetails itemId={itemId}
                     getData = {swapi.getStarship}
                     getImage = {swapi.getStarshipImage}
                     itemName = 'starship'/>
    )


    return (
        <Row left={list}  right={details} />
    );
};

export default StarshipPage;