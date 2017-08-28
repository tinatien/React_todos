var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoStore = require('../stores/TodoStore');
var TodoActions = require('../actions/TodoActions');


const styles = {
  wrap: {
    flex:'3',
    fontSize:'1em',
    color:'gray',
    border:'2px gray none',
    outline:'none'
  }
};

const InputBox = React.createClass({

  getInitialState() {
    return {
      text: ''
    }
  },

  componentDidMount() {
    TodoStore.addChangeListener(this.todoUpdate);
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.todoUpdate);
  },

  todoUpdate() {
    this.setState({
      text: ''
    });
  },

  handleContent(e) {
    this.setState({
      text: e.target.value
    });
  },

  submit(e) {
    if (e.keyCode === 13 && this.state.text) {
      TodoActions.create(this.state.text);
    }
  },


  render() {
    return (
      <input value={this.state.text} onKeyUp={this.submit} onChange={this.handleContent} type='text'  placeholder='What needs to be done?' style={styles.wrap} />

    )
  },

//   propTypes: {
//     id: ReactPropTypes.string,
//     placeholder: ReactPropTypes.string,
//     onSave: ReactPropTypes.func.isRequired,
//     value: ReactPropTypes.string
//   },
//
//
//   getInitialState: function() {
//     return {
//       value: this.props.value || ''
//     };
//   },
//
//
//   render() {
//     return (
//       <input style={styles.wrap}
//         id={this.props.id}
//         placeholder={this.props.placeholder}
//         // onBlur={this._save}
//         onChange={this._onChange}
//         onKeyDown={this._onKeyDown}
//         value={this.state.value}
//         autoFocus={true}   />
//     );
//   },
//
//
//   _save: function() {
//     this.props.onSave(this.state.value);
//     this.setState({
//       value: ''
//     });
//   },
//
//   _onChange: function(/*object*/ event) {
//     this.setState({
//       value: event.target.value
//     });
//   },
//
//   _onKeyDown: function(event) {
//     if (event.keyCode === ENTER_KEY_CODE) {
//       this._save();
//     }
//   }
});

module.exports = InputBox;
