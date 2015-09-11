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

const CompletedButton = React.createClass({
  render() {
    return (
        <button  style={styles.wrap}> Completed </button>
    )
  }
});

module.exports = CompletedButton ;
