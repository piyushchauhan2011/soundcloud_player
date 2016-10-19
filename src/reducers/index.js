const defaultState = {
  tracks: [],
  currentTrack: null
};

export default function tracks(state = defaultState, action) {
  switch (action.type) {
    case 'TRACKS_LOADED':
      return {...state,
        tracks: action.tracks
      };
    default:
      return state;
  }
}