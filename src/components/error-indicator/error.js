import React from 'react';

import icon from './error.png';
import './error.css';


export default class Error extends React.Component {

    render() {
        return (
             <div className={"error-indicator"}>
                 <p>Oops!</p>
                 <p>Something goes wrong</p>
                 <img src={icon} alt=""/>
             </div>
        );
    }
}
