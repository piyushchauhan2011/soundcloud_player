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

  constructor() {
    super();

    this.state = {
      songs: new Array(),
      selectedSong: new Object()
    };

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
    return (
      <div>
        <input
          type="text"
          placeholder="Search Artist"
          className={styles.searchArtist}
          onChange={this.handleChange}
        />
        
        <div className={styles.placeholder}>
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
  render() {
    return (
      <div className="song">
        <div className="artworkUrl">
          <image src={this.props.artworkUrl} className="artworkImage"/>
        </div>
        <div className="title">{this.props.title}</div>
        <div className="artist">
          from {this.props.username} {this.props.duration}
        </div>
        <div className="play">
          <i class="material-icons">play_arrow</i>
        </div>
        <div className="queue">
          <i class="material-icons">playlist_add</i>
        </div>
      </div>
    );
  }
}

// export class TrackList extends Component {
//   render() {
//     let songs = [];
//     return (

//     );
//   }
// }