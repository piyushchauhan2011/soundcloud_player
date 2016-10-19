import React, { Component } from 'react';
import { Link } from 'react-router';
import * as styles from '../stylesheets/main';
import CurrentTrack from './currentTrack';
import {connect} from 'react-redux';

export class App extends Component {
  constructor(props) {
    super(props);
  }

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

export default connect()(App);