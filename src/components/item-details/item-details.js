import React, { useState, useEffect } from 'react';

import './item-details.css';
import Loader from "../loader";
import {Link} from "react-router-dom";
import { withRouter } from "react-router";

const ItemDetails = (props) => {
    const { itemId, itemName, getData, children, match } = props;

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);

    const updatePerson = () =>{

        if (!itemId) {
            return;
        }

        setLoading(true);

        getData(itemId)
            .then(person => {
                setLoading(false);
                setItem(person);
            })
    };

    useEffect(() => {
        updatePerson();
    }, [itemId]);


    if (Object.entries(item).length === 0 && item.constructor === Object) {
        return <div>Select <b>{ itemName }</b> from the list</div>
    }

    if (loading) {
        return <Loader/>
    }

    let buttonToList = (
        <Link to={`${match.url.slice(0, -3)}/`}>
            Back
        </Link>
    );

    let buttonToDetails = (
        <Link to={`${match.url}${item.id}/`}>
            Go to  { item.name }
        </Link>
    );

    return (
        <div className="person-details card">
            <img className="person-image"
                 src={ item.image }
                 alt={ item.name }/>

            <div className="card-body">
                <h4>{ item.name }</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (c, idx) => {
                            return React.cloneElement(c, {item});
                        })
                    }
                </ul>
                <div className="button" >
                    { match.params.id
                        ?
                        buttonToList
                        :
                        buttonToDetails
                    }
                </div>
            </div>
        </div>
    )
};

let ItemDetailsHOC = withRouter(ItemDetails);

export default ItemDetailsHOC;