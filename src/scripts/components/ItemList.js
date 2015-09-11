import React from 'react';


const styles = {
  wrap: {


    flex:'1',
    fontSize:'1em',
    border:'2px gray none'
  }
};

const ItemList = React.createClass({
  render() {
    return (

      <div style={styles.wrap}>
        <p>hahaha</p>
      </div>


    )
  }
});

module.exports = ItemList;
