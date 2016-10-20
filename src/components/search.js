import React, { Component } from 'react';
import * as styles from '../stylesheets/main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { throttle } from 'underscore';

import Track from './track';
import * as PlayerActions from '../actions';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = throttle(this.handleChange.bind(this), 1000);
  }

  handleChange(ev) {
    let query = this.search.value;
    this.props.queryTracks(query);
  }

  render() {
    const { tracks } = this.props;
    let tracksEl = tracks.map((song, i) => {
      return (
        <Track
          key={i}
          i={i}
          song={song}
          {...this.props}
          />
      );
    });

    return (
      <div>
        <input
          ref={ ref => this.search = ref }
          type="text"
          placeholder="Search Artist"
          className={styles.searchArtist}
          onChange={this.handleChange}
          />
        <div className={styles.tracks}>
          {tracksEl}
        </div>
        {tracksEl ? null :
          <div className={styles.placeholder}>
            No tracks
          </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    currentTrack: state.currentTrack
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(PlayerActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Search);