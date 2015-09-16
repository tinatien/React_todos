import React from 'react';
var TodoActions = require('../actions/TodoActions');
var InputBox = require('./InputBox');
var ReactPropTypes = React.PropTypes;

const styles = {
  wrap: {
    flex:'1',
    fontSize:'1em',
    border:'2px gray none',
    borderTop:'1px solid gray',
    borderBottom:'1px solid gray',
    width:'400px',
  },

  cplbtn: {
    width:'45px',
    height:'100%',
    color:'gray',
    backgroundColor:'white',
    border:'2px gray none',
    outline:'none'
  }
};

const ItemList = React.createClass({
  propTypes: {
   todo: ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isEditing: false
    };
  },
  render() {
    var todo = this.props.todo;

    var input;
    if (this.state.isEditing) {
      input =
        <InputBox
          onSave={this._onSave}
          value={todo.text}
        />;
    }

    return (

  //     <div style={styles.wrap}>
  //       <p>hahaha</p>
  //     </div>
  //
  //
  //   )
  // }

  // <li key={todo.id}>
      <div key={todo.id} style={styles.wrap}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={this._onToggleComplete}
        />
        <label onDoubleClick={this._onDoubleClick}>
          {todo.text}
        </label>
        <button style={styles.cplbtn} className="fa fa-times fa-1x" onClick={this._onDestroyClick} />
        {input}
      </div>
    //   {input}
    // </li>
  );
},
_onToggleComplete: function() {
    TodoActions.toggleComplete(this.props.todo);
  },

  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  _onSave: function(text) {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  },

  _onDestroyClick: function() {
    TodoActions.destroy(this.props.todo.id);
  }

});


module.exports = ItemList;
