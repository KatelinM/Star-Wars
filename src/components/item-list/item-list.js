import React from 'react';

import './item-list.css';
import SwapiService from "../../services/api";

let swapi = new SwapiService();

export default class ItemList extends React.Component {

    state = {
        people: []
    };

    updatePeople = p => {
        swapi.getAllPeople()
            .then((p) => {
                console.log('p', p);
                    this.setState(
                        {people: p}
                    )
                }
            )
    };

    componentDidMount() {
        this.updatePeople();
    }

    render() {
        let { people } = this.state;
        return (
            <ul className="item-list list-group">

                {
                    people.map( p => {
                        return (
                            <li className="list-group-item" key={p.name}>
                                {p.name}
                            </li>
                        )
                    })
                }

            </ul>
        );
    }
}
