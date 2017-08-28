var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');
import _ from 'lodash';

var CHANGE_EVENT = 'change';

let _todos = [];

const TodoStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    return this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(listener) {
    return this.removeListener(CHANGE_EVENT, listener);
  },

  getAll() {
    return _todos;
  }
});
AppDispatcher.register((payload) => {
    const action = payload.action;

    switch (action) {
      case TodoConstants.TODO_FETCHED:
        _todos = payload.todos;

        TodoStore.emitChange();
        break;

      case TodoConstants.TODO_CREATE:
        _todos.push({
          id: payload.id,
          text: payload.text,
          complete: false
        });

        TodoStore.emitChange();
        break;

      case TodoConstants.TODO_DESTROY:
        var todoIndex = _.findIndex(_todos, {
          id: payload.id
        });

        if (~todoIndex) {
          _todos.splice(todoIndex, 1);
          TodoStore.emitChange();
        }
        break;

      case TodoConstants.TODO_COMPLETE:
        var todo = _.find(_todos, {
          id: payload.id
        });

        if (todo) {
          todo.complete = !todo.complete;
          TodoStore.emitChange();
        }
        break;
    }

    return true;
    });





module.exports = TodoStore;
