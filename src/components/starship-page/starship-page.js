import React, { useState } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './starship-page.css';
import SwapiService from "../../services/api";

const StarshipPage = () => {
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
                        getData = {swapi.getAllStarships}
                        renderItem = {({name, speed, passengers})=>(
                            <span>
                                {name } (
                                    {speed !== 'n/a' ? `${speed} м/с, `:null}
                                    {passengers !== '0' ? `${passengers} passengers`:null}
                                )
                            </span>
                        )}
                        selectedItemId={selectedItemId}/>
                </div>
                <div className="col-md-6">
                    <ItemDetails personId={selectedItemId} />
                </div>
            </div>
        </>
    );
};

export default StarshipPage;