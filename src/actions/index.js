export const QUERY_TRACKS = 'QUERY_TRACKS';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';
export const QUEUE_TRACK = 'QUEUE_TRACK';

export function queryTracks(query) {
  return {
    type: QUERY_TRACKS,
    query
  }
}

export function playTrack(trackIndex) {
  return {
    type: PLAY_TRACK,
    trackIndex
  }
}

export function pauseTrack(trackIndex) {
  return {
    type: PAUSE_TRACK,
    trackIndex
  }
}

export function queueTrack(track) {
  return {
    type: QUEUE_TRACK,
    track
  }
}