import React from 'react';
import './item-list.css';
import Error from "../../components/error-indicator/index";

export default class ItemList extends React.Component {
    state = {
        itemList: [],
        error: false,
    };

    updatePeople = itemList => {
        const { getData } = this.props;
        getData()
            .then((itemList) => {
                    this.setState(
                        {itemList}
                    )
                }
            )
    };

    componentDidMount() {
        this.updatePeople();
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    render() {
        let { itemList, error } = this.state;

        if(error){
            return <Error/>
        }
        return (
            <ul className="item-list list-group mb-20">

                {
                    itemList.map( i => {
                        let label = this.props.children(i);
                        return (
                            <li className={`${this.props.itemId === i.id ? 'active' : null} list-group-item`}
                                key={i.name}
                                onClick={() => this.props.onItemSelected(i.id)}>
                                {label}
                            </li>
                        )
                    })
                }

            </ul>
        );
    }
}
