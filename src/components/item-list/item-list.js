import React from 'react';

import './item-list.css';

function ItemList(props) {
    let { data, children, itemId, onItemSelected } = props;

    return (
        <ul className="item-list list-group mb-20">

            {
                data.map(i => {
                    let label = children(i);
                    return (
                        <li className={`${itemId === i.id ? 'active' : null} list-group-item`}
                            key={i.name}
                            onClick={() => onItemSelected(i.id)}>
                            {label}
                        </li>
                    )
                })
            }

        </ul>
    );
}

export default ItemList;


const f = () => {
    return class extends React.Component {
        componentDidMount() {
            console.log(this.props)
            //    {itemId: null, onItemSelected: ƒ, getData: ƒ, children: ƒ}
        }

        render() {
            return <ItemList {...this.props} />;
        }
    }
}