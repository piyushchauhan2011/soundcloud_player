import {
  search
} from '../api';
import {
  put,
  take,
  fork
} from 'redux-saga/effects';

export function* queryTracks(query) {
  const result = yield search(query);
  yield put({
    type: 'TRACKS_LOADED',
    tracks: result.data
  });
}

export function* watchForQueryTracks() {
  while (true) {
    const data = yield take('QUERY_TRACKS');
    yield fork(queryTracks.bind(this, data.query));
  }
}