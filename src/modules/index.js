import React, { Component } from 'react';
import { Link } from 'react-router';
import * as styles from '../stylesheets/main';
import { search } from '../api';

export class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appName}>Audiense Player</div>
        <ul className={styles.navigation}>
          <Link to="/search" className={styles.navItem} activeClassName={styles.active}>
            <li>
              <i className="material-icons">search</i>
              <span>Search</span>
            </li>
          </Link>
          <Link to="/queue" className={styles.navItem} activeClassName={styles.active}>
            <li>
              <i className="material-icons">list</i>
              <span>Queue</span>
            </li>
          </Link>
          <Link to="/about" className={styles.navItem} activeClassName={styles.active}>
            <li>
              <i className="material-icons">business</i>
              <span>About</span>
            </li>
          </Link>
        </ul>

        <div className={styles.container}>
          {this.props.children}
          <div className={styles.notPlaying}>No track to play...</div>
        </div>
      </div>
    )
  }
}

export class Search extends Component {

  // playSound(context, buffer) {
  //   let source = context.createBufferSource();
  //   source.buffer = buffer;
  //   source.connect(context.destination);
  //   source.start(0);
  // }

  constructor(props) {
    super(props);

    this.state = {
      songs: new Array(),
      selectedSong: new Object()
    };

    this.handleChange = this.handleChange.bind(this);

    search('stones throw')
      .then((result) => {
        console.log(result.data[1]);
        this.setState({ songs: result.data });
        // let stream = new Audio();
        // stream.src = song.stream_url + `?client_id=${process.env.CLIENT_ID}`;
        // stream.play();
        // console.log(stream);
      });
  }

  handleChange(ev) {
    let query = ev.target.value;
    // search(query)
    //   .then((result) => {
    //     console.log(result.data[1]);
    //     this.setState({ songs: result.data });
    //     // let stream = new Audio();
    //     // stream.src = song.stream_url + `?client_id=${process.env.CLIENT_ID}`;
    //     // stream.play();
    //     // console.log(stream);
    //   });
  }

  render() {
    let tracks = this.state.songs.map((song) => {
      let duration = Math.round(song.duration / 1000);
      duration = [
        Math.round(duration / 60),
        duration % 60
      ];
      return (
        <Track
          key={song.id}
          artworkUrl={song.artwork_url}
          title={song.title}
          username={song.user.username}
          duration={duration}
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
        <div className={styles.placeholder}
          style={ tracks ? { display: 'none' } : '' }
        >
          No tracks
        </div>
      </div>
    );
  }
}

export class Queue extends Component {
  render() {
    return (
      <div className={styles.placeholder}>
        Queue is Empty
      </div>
    );
  }
}

export class About extends Component {
  render() {
    return (
      <div className={styles.placeholder}>
        About Audiense Page
      </div>
    );
  }
}

export class Track extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.song}>
        <img src={this.props.artworkUrl} className={styles.artwork} />
        <div className={styles.songMetadata}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.artist}>
            from {this.props.username} {this.props.duration[0]}:{this.props.duration[1]}
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

Track.PropTypes = {
  artworkUrl: React.PropTypes.string,
  title: React.PropTypes.string,
  username: React.PropTypes.string,
  duration: React.PropTypes.number
}

// export class TrackList extends Component {
//   render() {
//     let songs = [];
//     return (

//     );
//   }
// }