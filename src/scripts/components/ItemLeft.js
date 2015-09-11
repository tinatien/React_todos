import React from 'react';


const styles = {
  wrap: {

    // flex:'3',
    height:'100%',
    color:'gray',
    backgroundColor:'white',
    border:'2px gray none',
    textAlign:'center',
    lineHeight:'50px',
    fontSize:'0.7em',
    paddingLeft:'10px',
    paddingRight:'80px'



  }
};

const ItemLeft = React.createClass({
  render() {
    return (
        <div style={styles.wrap}>1 item left</div>
    )
  }
});

module.exports = ItemLeft;
