import React from 'react';


const styles = {
  wrap: {

    width:'48px',
    height:'100%',
    color:'gray',
    backgroundColor:'white',
    border:'2px gray none',
    outline:'none'
  }
};

const CheckAllButton = React.createClass({
  render() {
    return (

        <button style={styles.wrap}   className="fa fa-chevron-down fa-1x" />

    )
  }
});

module.exports = CheckAllButton;
