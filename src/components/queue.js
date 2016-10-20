import React, { Component } from 'react';
import * as styles from '../stylesheets/main';
import Track from './track';

export default class Queue extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { queue } = this.props;
    let queueEl = queue.map((song, i) => {
      return (
        <Track key={song.id} i={song.id} song={song} {...this.props} />
      );
    });

    return (
      <div>
        {queueEl ? queueEl :
          <div className={styles.placeholder}>
            Queue is Empty
          </div>}
      </div>
    );
  }
}