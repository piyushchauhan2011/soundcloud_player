import React, { Component } from 'react';
import * as styles from '../stylesheets/currentTrack';

export default class CurrentTrack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let song = this.props.song;
    let duration = Math.round(song.duration / 1000);
    duration = [
      Math.round(duration / 60),
      duration % 60
    ];
    return (
      <div className={styles.song}>
        <img src={song.artwork_url} className={styles.artwork} />
        <div className={styles.songMetadata}>
          <div className={styles.title}>{song.title}</div>
          <div className={styles.artist}>
            by <a href="#" className={styles.user}>{song.user.username}</a>
          </div>
        </div>
        <div className={styles.controls}>
          <button className={styles.fabBtn} onClick={this.props.pauseTrack}>
            <i style={{ margin: '5px' }}className="material-icons">pause_arrow</i>
          </button>
        </div>
      </div>
    );
  }
}