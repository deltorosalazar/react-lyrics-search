import React, { Component } from 'react';
import { Consumer } from './../../context';
import Spinner from './../layout/Spinner';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { trackList } = value;

          console.log(value);

          if (trackList.length === 0 || trackList === undefined) {
            return <Spinner />;
          } else {
            return <h1>Tracks Loaded</h1>;
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
