import React from 'react';
import AllButton from './AllButton';
import ActiveButton from './ActiveButton';
import CompletedButton from './CompletedButton';
import ClearButton from './ClearButton';
import ItemLeft from './ItemLeft';
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');

const styles = {
  wrap: {
    // display:'flex',
    backgroundColor:'#FFF',
    width: '600px',
    height:'50px',
    // boxShadow: '3px 3px 3px #888888',
    fontSize:'1em',
    color:'red'

  },
  clrbtn: {
    flex:'1',
    height:'100%',
    color:'black',
    backgroundColor:'white',
    border:'2px gray none',
    outline:'none',
    paddingLeft:'380px',
    fontSize:'1em'

  }
};

const StatusWrap = React.createClass({
  propTypes: {
    allTodos: ReactPropTypes.object.isRequired
  },

  render() {
    var allTodos = this.props.allTodos;
    var total = Object.keys(allTodos).length;

    if (total === 0) {
      return null;
    }

    var completed = 0;
    for (var key in allTodos) {
      if (allTodos[key].complete) {
        completed++;
      }
    }

    var itemsLeft = total - completed;
    var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

    var clearCompletedButton;
    if (completed) {
      clearCompletedButton =
        <button style={styles.clrbtn}
          onClick={this._onClearCompletedClick}>
          Clear completed ({completed})
        </button>;
    }
    return (
      <footer>
        <span>
          <strong style={styles.wrap} >
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
      // <div style={styles.wrap}>
      //   <ItemLeft />
      //   <AllButton />
      //   <ActiveButton />
      //   <CompletedButton />
      //   <ClearButton />
      // </div>
    );
  },

  _onClearCompletedClick: function() {
  TodoActions.destroyCompleted();
}

});

module.exports = StatusWrap;
