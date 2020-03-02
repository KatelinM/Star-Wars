import React, {useContext} from 'react';
import '../../../index.css';
import {createStore} from "redux";
import {decreaseAC, increaseAC, randNumAC} from "./action-creators";
import reducer from "./reducer";

const ReduxTest = () =>{
    const store = createStore(reducer);

    store.subscribe(() => {
        document.getElementById('s').innerHTML = store.getState()
    });

    const randNum = () => Math.floor(Math.random()*10);

    const increase = () => { store.dispatch(increaseAC()) };
    const decrease = () => { store.dispatch(decreaseAC()) };
    const random = () => { store.dispatch(randNumAC(randNum())) };

    return(
        <>
            <p id="s">{store.getState()}</p>
            <button onClick={() => increase()}>+</button>
            <button onClick={() => decrease()}>-</button>
            <button onClick={() => random()}>RND</button>
        </>

    )
};

export { ReduxTest }




