import React from 'react';
import ItemCheckButton from './ItemCheckButton';
import ItemList from './ItemList'
import ItemCompleteButton from './ItemCompleteButton';
var TodoActions = require('../actions/TodoActions');
var ReactPropTypes = React.PropTypes;


const styles = {
  wrap: {
    display: 'flex',
    backgroundColor:'#FFF',
    width: '600px',
    height:'100%',
    fontSize:'1em',
    // border:'1px 0px 1px 0px solid gray',
    // borderTop:'1px solid gray',
    // borderBottom:'1px solid gray'
  }
};

const ItemWrap= React.createClass({
  propTypes: {
    allTodos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired
  },

  render() {
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    var allTodos = this.props.allTodos;
    var todos = [];

    for (var key in allTodos) {
      todos.push(<ItemList key={key} todo={allTodos[key]} />);
    }

    return (
      <section style={styles.wrap}>
        <input
          type="checkbox"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''}
        />
        <label htmlFor="toggle-all" >Mark all</label>
        <ul>{todos}</ul>
      </section>
    );
  },
  _onToggleCompleteAll: function() {
  TodoActions.toggleCompleteAll();
}

      // <div style={styles.wrap}>
      //   <ItemCheckButton />
      //   <ul>{todos}</ul>
      //   <ItemList />
      //   <ItemCompleteButton />
      // </div>

});

module.exports = ItemWrap;
