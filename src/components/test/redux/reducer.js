import {combineReducers} from "redux";

const filter = ( state = '', action ) => {
    switch (action.type) {
        case 'FILTER_TRACK':
            return action.name;

        default:
            return state;
    }
};

const trackList = ( state = [], action ) => {

    switch(action.type) {
        case 'ADD_TRACK':
            return [
                ...state,
                action.track
            ];

        case 'REMOVE_TRACK':
            return state.filter(({name}) => {
                        return name !== action.track;
                    }) ;
        default:
            return state;
    }
};

const playList = ( state = [], action ) => {

    switch(action.type) {
        case 'ADD_PLAYLIST':
            return  [
                ...state,
                action.playlistName
            ];
        case 'REMOVE_PLAYLIST':
            return state.filter((name) => {
                        return name !== action.playlistName;
                    });
        default:
            return state;
    }

};

export default combineReducers({
    trackList,
    playList,
    filter,
});