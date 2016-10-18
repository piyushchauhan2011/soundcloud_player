import React, { Component } from 'react';
import { search } from '../api';
import * as styles from '../stylesheets/main';

import Track from './track';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: false,
      songs: new Array()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    let query = ev.target.value;
    this.setState({ searching: true });
    search(query)
      .then((result) => {
        this.setState({ songs: result.data });
        this.setState({ searching: false });
      });
  }

  render() {
    let tracks = this.state.songs.map((song) => {
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
          {tracks}
        </div>
        { this.state.searching ?
          <div className={styles.placeholder}>
            Searching...
          </div> : null }
        { tracks ? null :
          <div className={styles.placeholder}>
            No tracks
          </div> }
      </div>
    );
  }
}