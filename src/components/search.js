import React, { Component } from 'react';
import * as styles from '../stylesheets/main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Track from './track';
import * as PlayerActions from '../actions';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    let query = ev.target.value;
    this.props.queryTracks(query);
  }

  render() {
    const { tracks } = this.props;
    let tracksEl = tracks.map((song) => {
      return (
        <Track
          key={song.id}
          song={song}
          />
      );
    });

    return (
      <div>
        <input
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