import React, { Component } from 'react';

import './item-details.css';
import Loader from "../loader";

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
    let { id, name, gender, birthYear, eyeColor } = this.state.item;
    console.log(this.state.item)
    if (!id) {
      return <div>Select <b>{ this.props.itemName }</b> from the list</div>
    }

    if (this.state.loading) {
      return <Loader/>
    }

    return (
      <div className="person-details card">
        <img className="person-image"
          src={this.state.image}
          alt={ name }/>

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{ birthYear }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{ eyeColor }</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
