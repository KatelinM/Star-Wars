var mockApiData = [
  {
    id: 1,
    name: 'Enter Sandman'
  },
  {
    id: 2,
    name: 'Welcome Home'
  },
  {
    id: 3,
    name: 'Master of Puppets'
  },
  {
    id: 4,
    name: 'Fade to Black'
  },
  {
    id: 5,
    name: 'Nothing Else Matters'
  }
];

export const addTrackAC = (track) => ({ type: 'ADD_TRACK', track: track });
export const removeTrackAC = (track) => ({ type: 'REMOVE_TRACK', track: track });
export const filterTrackAC = (name) => ({ type: 'FILTER_TRACK', name });
export const getTracksAC = () => dispatch => {
    setTimeout( () => { 
        dispatch({type: 'GET_TRACKS', payload: mockApiData})
    }, 2000);

};