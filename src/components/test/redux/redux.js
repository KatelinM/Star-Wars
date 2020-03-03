import React, {useContext, useState} from 'react';
import '../../../index.css';
import {addTrackAC, filterTrackAC, removeTrackAC} from "./action-creators";
import { connect } from "react-redux";

const ReduxTest = (props) => {
    const addTrack = () => {
        props.onAddTrack(trackInput.value)
        trackInput.value =''
    };

    const removeTrack = () => {
        props.onRemoveTrack(trackInput.value)
        trackInput.value =''
    };

    const filterTrack = () => {
        props.onFilterTrack(filterInput.value)
        trackInput.value =''
    };

    let trackInput;
    let filterInput;

    return(
        <>
            <div>
                <div className="mb-2">
                     <input
                            ref={(input) => trackInput = input}
                            type = "text"
                            className="mr-4"
                        />
                        <button onClick={addTrack} className="btn btn-success mr-4">Add track</button>
                        <button onClick={removeTrack} className="btn btn-danger">Remove track</button>
                </div>
                <div>
                    <input
                        ref={(input) => filterInput = input}
                        type="search"
                        onChange={filterTrack}
                        placeholder=" Search track..."
                    />
                </div>
                <ul className="list">
                    { props.tracks.map((track, i) =>
                        <li key={i}>{ track.name }</li>) }
                </ul>
            </div>
        </>
    )
};

export default connect(
    state => ({
        tracks: state.trackList.filter((track) => {
                        return track.name.indexOf(state.filter) >= 0;
                    }),
        playList: state.playList,
        filter: state.filter
    }),
    dispatch => ({
        onAddTrack: (name) => {
            let newTrack = {
                id: Date.now().toString(),
                name
            };
            dispatch(addTrackAC(newTrack))
        },

        onRemoveTrack: (newTrack) => {
            dispatch(removeTrackAC(newTrack))
        },

        onFilterTrack: (newTrack) => {
            dispatch(filterTrackAC(newTrack))
        },

    })
)
(ReduxTest)




