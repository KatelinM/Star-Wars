import React, { useState, useEffect } from 'react';

import './item-details.css';
import Loader from "../loader";
import {Link} from "react-router-dom";

const ItemDetails = (props) => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  const updatePerson = () =>{
    const { itemId, getData } = props;
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
  }, [props.itemId]);


  if (Object.entries(item).length === 0 && item.constructor === Object) {
    return <div>Select <b>{ props.itemName }</b> from the list</div>
  }

  if (loading) {
    return <Loader/>
  }

  return (
      <div className="person-details card">
        <img className="person-image"
             src={ item.image }
             alt={ item.name }/>

        <div className="card-body">
          <h4>{ item.name }</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(props.children, (c, idx) => {
                  return React.cloneElement(c, {item});
              })
            }
          </ul>
            <button>
                <Link to={`/people/${item.id}`}>Go to { item.name } </Link>
            </button>
        </div>
      </div>
  )
};

export default ItemDetails;