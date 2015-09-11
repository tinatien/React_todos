import React from 'react';
import AllButton from './AllButton';
import ActiveButton from './ActiveButton';
import CompletedButton from './CompletedButton';
import ClearButton from './ClearButton';
import ItemLeft from './ItemLeft';

const styles = {
  wrap: {

    display:'flex',
    backgroundColor:'#FFF',
    width: '600px',
    height:'50px',
    // boxShadow: '3px 3px 3px #888888',
    fontSize:'1em'

  }
};

const StatusWrap = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <ItemLeft />
        <AllButton />
        <ActiveButton />
        <CompletedButton />
        <ClearButton />
      </div>
    )
  }
});

module.exports = StatusWrap;
