export const QUERY_TRACKS = 'QUERY_TRACKS';

export function queryTracks(query) {
  return {
    type: QUERY_TRACKS,
    query
  }
}