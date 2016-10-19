import React, { Component } from 'react';
import * as styles from '../stylesheets/main';

export default class Track extends Component {
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
            from {song.user.username} {duration[0]}:{duration[1]}
          </div>
        </div>
        <div className={styles.controls}>
          <button className={styles.btn}>
            <i className="material-icons">play_arrow</i>
          </button>
          <button className={styles.btn}>
            <i className="material-icons">playlist_add</i>
          </button>
        </div>
      </div>
    );
  }
}