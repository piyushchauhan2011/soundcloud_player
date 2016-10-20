const defaultState = {
  tracks: [],
  currentTrack: null
};

function playSong(state, trackIndex) {
  let track = state.tracks[trackIndex];
  let stream = new Audio();
  stream.src = track.stream_url + `?client_id=${process.env.CLIENT_ID}`;
  stream.play();
  track.stream = stream;
}

function stopCurrent(state) {
  let track = state.currentTrack;
  if (track) {
    let stream = state.currentTrack.stream;
    stream.pause();
  }
}

export default function tracks(state = defaultState, action) {
  switch (action.type) {
    case 'TRACKS_LOADED':
      return Object.assign({},state,{
        tracks: action.tracks
      });
    case 'PLAY_TRACK':
      stopCurrent(state);
      playSong(state, action.trackIndex);
      return Object.assign({},state,{
        currentTrack: state.tracks[action.trackIndex]
      });
    case 'PAUSE_TRACK':
      stopCurrent(state)
      return Object.assign({},state,{
        currentTrack: null
      });
    default:
      return state;
  }
}