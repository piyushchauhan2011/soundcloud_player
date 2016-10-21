import 'babel-polyfill';
import expect from 'expect';
import { shallow } from 'enzyme';
import {
  put,
  take
} from 'redux-saga/effects'
import {
  watchForQueryTracks,
  queryTracks
} from '../../src/sagas';

describe('watchForQueryTracks', () => {
  it('should pass', () => {
    const generator = watchForQueryTracks();

    expect(true).toEqual(true);
  });
});