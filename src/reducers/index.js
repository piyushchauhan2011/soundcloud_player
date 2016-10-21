const defaultState = {
  tracks: [],
  queue: [],
  currentTrack: null
};

function newStream(state, track) {
  let song;
  do {
    song = state.queue.shift();
  } while (song.id !== track.id);
  let stream = new Audio();
  stream.src = song.stream_url + `?client_id=${process.env.CLIENT_ID}`;
  stream.play();
  stream.addEventListener('ended', (e) => {
    let song = state.queue.shift();
    playSong(state, song);
  });
  window.stream = stream;
  song.stream = stream;
}

function playSong(state, track) {
  if (state.currentTrack) {
    if (state.currentTrack.id === track.id) {
      let stream = state.currentTrack.stream;
      if (stream.paused) stream.play();
    } else {
      pauseSong(state);
      newStream(state, track);
    }
  } else {
    newStream(state, track);
  }
}

function pauseSong(state) {
  let track = state.currentTrack;
  if (track) {
    let stream = state.currentTrack.stream;
    stream.pause();
  }
}

function queueSong(state, track) {
  let found = state.queue.find((song) => {
    return (song.id === track.id);
  });
  if (!found) {
    state.queue.push(track);
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
      queueSong(state, track);
      playSong(state, track);
      return Object.assign({},state,{
        currentTrack: track
      });
    case 'PAUSE_TRACK':
      pauseSong(state)
      return state;
    case 'QUEUE_TRACK':
      queueSong(state, action.track);
      return state;
    default:
      return state;
  }
}