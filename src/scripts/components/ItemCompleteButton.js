import React from 'react';

const styles = {
  wrap: {


    width:'45px',
    height:'100%',
    color:'gray',
    backgroundColor:'white',
    border:'2px gray none',
    outline:'none'

  }
};

const ItemCompleteButton = React.createClass({
  render() {
    return (

        <button style={styles.wrap}   className="fa fa-times fa-1x" />

    )
  }
});

module.exports = ItemCompleteButton;
