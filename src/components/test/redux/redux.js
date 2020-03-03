import React, {useContext, useState} from 'react';
import '../../../index.css';
import {addTrackAC, removeTrackAC} from "./action-creators";
import { connect } from "react-redux";

const ReduxTest = (props) => {
console.log(props.trackList)
    const addTrack = () => {
        props.onAddTrack(trackInput.value)
        trackInput.value =''
    };

    const removeTrack = () => {
        props.onRemoveTrack(trackInput.value)
        trackInput.value =''
    };

    let trackInput;

    return(
        <>
            <div>
                <input
                    ref={(input) => trackInput = input}
                    type = "text"
                />
                <button onClick={addTrack}>Add track</button>
                <button onClick={removeTrack}>Remove track</button>
                <ul className="list">
                    { props.trackList.map((track, i) =>
                        <li key={i}>{track}</li>)}
                </ul>
            </div>
        </>
    )
};

export default connect(
    state => ({
        trackList: state.tracks,
    }),
    dispatch => ({
        onAddTrack: (newTrack) => {
            dispatch(addTrackAC(newTrack))
        },
        onRemoveTrack: (newTrack) => {
            dispatch(removeTrackAC(newTrack))
        },

    })
)
(ReduxTest)




