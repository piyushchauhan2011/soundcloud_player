import React, { Component } from 'react';
import { Link } from 'react-router';
import * as styles from '../stylesheets/main';
import CurrentTrack from './currentTrack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActions from '../actions';

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
          {
            React.cloneElement(
              this.props.children,
              Object.assign({},this.props)
            )
          }
          
          <div className={styles.notPlaying}>{
            this.props.currentTrack ?
              <CurrentTrack key={this.props.currentTrack.id} i={this.props.currentTrack.id} song={this.props.currentTrack} {...this.props} /> :
              <span>No track to play...</span>
          }</div>
          
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    currentTrack: state.currentTrack,
    queue: state.queue
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(PlayerActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(App);