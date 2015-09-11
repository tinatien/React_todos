import React from 'react';
import ItemCheckButton from './ItemCheckButton';
import ItemCompleteButton from './ItemCompleteButton';
import ItemList from './ItemList';

const styles = {

  wrap: {
    display: 'flex',
    backgroundColor:'#FFF',
    width: '600px',
    height:'50px',
    fontSize:'1em',
    // border:'1px 0px 1px 0px solid gray',
    borderTop:'1px solid gray',
    borderBottom:'1px solid gray'


  }
};

const ItemWrap= React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <ItemCheckButton />
        <ItemList />
        <ItemCompleteButton />
      </div>
    )
  }
});

module.exports = ItemWrap;
