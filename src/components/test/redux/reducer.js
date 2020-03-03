const initialState = {
    tracks: [ 'bad guy', 'planet' ],
    playlists: [ 'home list', 'work list' ],
}

const playlist = ( state = initialState, action ) => {

    switch(action.type) {
        case 'ADD_TRACK':
            return {
                ...state,
                tracks: [ ...state.tracks, action.trackName ],
            };
        case 'REMOVE_TRACK':
            return {
                ...state,
                tracks: state.tracks.filter((name) => {
                    return name !== action.trackName;
                }),
            };


        case 'ADD_PLAYLIST':
            return {
                ...state,
                playlists: [ ...state.playlists, action.playlistName ],
            };
        case 'REMOVE_PLAYLIST':
            return {
                ...state,
                playlists: state.playlists.filter((name) => {
                    return name !== action.playlistName;
                }),
            };
        default:
            return state;
    }

};

export default playlist;