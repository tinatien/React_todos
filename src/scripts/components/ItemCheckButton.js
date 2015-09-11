import React from 'react';

const styles = {
  wrap: {

    width:'48px',
    height:'100%',
    color:'gray',
    backgroundColor:'white',
    dataShadow:'false',
    border:'2px gray none',
    outline:'none',
    fontWeight:'100'



  }
};

const ItemCheckButton = React.createClass({
  render() {
    return (

        <button style={styles.wrap}   className="fa fa-check-circle-o fa-2x" />

    )
  }
});

module.exports = ItemCheckButton;
