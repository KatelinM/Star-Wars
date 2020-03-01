import React, { Component } from 'react';

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

export default class ItemDetails extends Component {

  state = {
    item: {},
    loading: false,
    image: null
  };

  updatePerson() {
    const { itemId, getData, getImage } = this.props;
    if (!itemId) {
      return;
    }

    this.setState({
      loading: true,
      image: getImage(itemId)
    });

    getData(itemId)
        .then(person => {
          this.setState({
            item: person,
            loading: false
          })
        })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.itemId !== this.props.itemId) {
      this.updatePerson()
    }
  }

  componentDidMount() {
    this.updatePerson()
  }

  render() {
    let { name } = this.state.item;
    let { item, loading } = this.state;

    if (Object.entries(item).length === 0 && item.constructor === Object) {
      return <div>Select <b>{ this.props.itemName }</b> from the list</div>
    }

    if (loading) {
      return <Loader/>
    }

    return (
      <div className="person-details card">
        <img className="person-image"
          src={ this.state.image }
          alt={ name }/>

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (c, idx) => {
                return React.cloneElement(c, {item});
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
