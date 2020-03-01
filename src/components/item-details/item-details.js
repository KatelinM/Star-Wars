import React, { useState, useEffect } from 'react';

import './item-details.css';
import Loader from "../loader";

const Record = ({item, field, label}) => {
  return (
      <li className="list-group-item">
        <span className="term">{ label }:</span>
        <span>{ item[field] }</span>
      </li>
  )
};

export {
  Record
};

const ItemDetails = (props) => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const updatePerson = () =>{
    const { itemId, getData, getImage } = props;
    if (!itemId) {
      return;
    }

    setLoading(true);
    setImage(getImage(itemId));

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
             src={ image }
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
        </div>
      </div>
  )
};

export default ItemDetails;