import React, { Component } from 'react';
import * as styles from '../stylesheets/currentTrack';

export default class CurrentTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stream: null
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    if (this.state.stream) {
      this.state.stream.play();
    } else {
      let song = this.props.song;
      let stream = new Audio();
      stream.src = song.stream_url + `?client_id=${process.env.CLIENT_ID}`;
      stream.play();
      this.setState({ stream: stream });
    }
  }

  pause() {
    if (this.state.stream) {
      this.state.stream.pause();
    }
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
            by {song.user.username}
          </div>
        </div>
        <div className={styles.controls}>
          <button className={styles.btn} onClick={this.play}>
            <i className="material-icons">play_arrow</i>
          </button>
        </div>
      </div>
    );
  }
}