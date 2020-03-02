import React, { useState } from 'react';

import './people-page.css';
import Row from "../../row";
import ErrorBoundary from "../../error-boundary";
import {PersonDetails, PersonList} from "../../sw-components";

const PeoplePage = () => {
    const [itemId, setSelectedItemId] = useState({});
    const onItemClicked = function (id) {
        setSelectedItemId(id);
    };

    const list = (
        <ErrorBoundary>
        <PersonList
            onItemSelected = {(id)=>{ onItemClicked(id) }}
            itemId={itemId}
        />
            {/*{(p)=>`${ p.name } (${ p.birth_year })`}*/}

        </ErrorBoundary>

    );
    const details = (
        <ErrorBoundary>
            <PersonDetails itemId={itemId} />
        </ErrorBoundary>
    );

    return (
        <Row left={ list } right={ details } />
    );
};

export default PeoplePage;