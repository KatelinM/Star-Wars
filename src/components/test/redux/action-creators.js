export const addTrackAC = (track) => ({ type: 'ADD_TRACK', track: track });
export const removeTrackAC = (track) => ({ type: 'REMOVE_TRACK', track: track });
export const filterTrackAC = (name) => ({ type: 'FILTER_TRACK', name });