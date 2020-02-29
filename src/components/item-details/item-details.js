import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/api";
import Loader from "../loader";

export default class ItemDetails extends Component {

  swapi = new SwapiService()

  state = {
    person: {},
    loading: false
  };

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.setState({
      loading: true,
    })

    this.swapi
        .getPerson(personId)
        .then(person => {
          this.setState({
            person: person,
            loading: false
          })
        })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.personId !== this.props.personId) {
      this.updatePerson()
    }
  }

  componentDidMount() {
    this.updatePerson()
  }

  render() {
    let { id, name, gender, birthYear, eyeColor } = this.state.person;
    if (!id) {
      return <div>Select person from the list</div>
    }

    if (this.state.loading) {
      return <Loader/>
    }

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
