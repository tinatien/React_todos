
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import TodoConstants from '../constants/TodoConstants.js';
import qs from 'querystring';

const TodoActions = {
  fetch() {
    const req = new XMLHttpRequest();
    req.open('GET', '/api/main');
    req.responseType = 'json';
    req.onreadystatechange = function () {
      if (req.readyState !== 4 || req.status !== 200) return;

      AppDispatcher.dispatch({
        todos: req.response,
        action: TodoConstants.TODO_FETCHED,
      });
    };
  req.send();
},

  create(text) {
    const data = qs.stringify({
      text: text
    });

    const req = new XMLHttpRequest();
    req.open('POST', '/api/main');
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.responseType = 'json';
    req.onreadystatechange = function () {
      if (req.readyState !== 4 || req.status !== 201) return;

      AppDispatcher.dispatch({
        id: req.response.id,
        actionType: TodoConstants.TODO_CREATE,
        text: text
      });
    };
    req.send(data);
  },


  toggleComplete: function(id) {
    const req = new XMLHttpRequest();
    req.open('PATCH', '/api/main/' + id + '/toggleComplete');
    req.responseType = 'json';
    req.onreadystatechange = function () {
      if (req.readyState !== 4 || req.status !== 204) return;

      AppDispatcher.dispatch({
        actionType: TodoConstants.TODO_COMPLETE
        id: id
      });
    };
    req.send();
  },

  destroy(id) {
    const req = new XMLHttpRequest();
    req.open('DELETE', '/api/main/' + id);
    req.responseType = 'json';
    req.onreadystatechange = function () {
      if (req.readyState !== 4 || req.status !== 204) return;

      AppDispatcher.dispatch({
        actionType: TodoConstants.TODO_DESTROY,
        id: id,
      });
    };
    req.send();
  },
};

export default TodoActions;
// module.exports = TodoActions;
