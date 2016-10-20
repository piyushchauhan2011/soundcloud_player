import React, { Component } from 'react';
import * as styles from '../stylesheets/main';
import { throttle } from 'underscore';
import Track from './track';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = throttle(this.handleChange.bind(this), 1000);
  }

  handleChange(ev) {
    let query = this.refs.search.value;
    this.props.queryTracks(query);
  }

  render() {
    const { tracks } = this.props;
    let tracksEl = tracks.map((song, i) => {
      return (
        <Track key={i} i={i} song={song} {...this.props} />
      );
    });

    return (
      <div>
        <input
          ref="search"
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

export default Search;