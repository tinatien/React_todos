import React from 'react';


const styles = {
  wrap: {

    flex:'1',
    height:'100%',
    color:'gray',
    backgroundColor:'white',
    border:'2px gray none',
    outline:'none',
    fontSize:'1em'
  }
};

const AllButton = React.createClass({
  render() {
    return (
        <button style={styles.wrap} >All</button>
    )
  }
});

module.exports = AllButton;
