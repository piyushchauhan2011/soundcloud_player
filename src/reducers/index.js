const defaultState = {
  tracks: [],
  currentTrack: null
};

function newStream(track) {
  let stream = new Audio();
  stream.src = track.stream_url + `?client_id=${process.env.CLIENT_ID}`;
  stream.play();
  track.stream = stream;
}

function playSong(state, track) {
  if (state.currentTrack) {
    if (state.currentTrack.id === track.id) {
      let stream = state.currentTrack.stream;
      if (stream.paused) stream.play();
    } else {
      pauseSong(state);
      newStream(track);
    }
  } else {
    newStream(track);
  }
}

function pauseSong(state) {
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
      let track = state.tracks.find((track) => {
        return track.id === action.trackIndex;
      });
      playSong(state, track);
      return Object.assign({},state,{
        currentTrack: track
      });
    case 'PAUSE_TRACK':
      pauseSong(state)
      return state;
    default:
      return state;
  }
}