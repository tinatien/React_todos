var express = require('express');
var router = express.Router();
var _ = require('lodash');

var todos = [];

router.get('/', function (req, res) {
  res.json(todos);
});

router.post('/', function (req, res) {
  if (!req.body.text) {
    res.status(401);
    return res.json({
      message: 'Parameter Error'
    });
  }

  var todoId = Math.random();

  todos.push({
    id: todoId,
    text: req.body.text,
    complete: false,
  });

  res.status(201);
  res.json({
    id: todoId,
  });
});

router.patch('/:todo/toggleComplete', function (req, res) {
  var tododo = _.find(main, {
    id: parseFloat(req.params.todoId)
  });

  if (tododo) {
    tododo.checked = !tododo.checked;
    res.status(204);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
});

router.delete('/:todoId', function (req, res) {
  var todoIndex = _.findIndex(main, {
    id: parseFloat(req.params.todoId)
  });

  if (~todoIndex) {
    main.splice(todoIndex, 1);
    res.status(204);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
});

//
// router.get('/', function (req, res) {
//   res.json({
//     msg: 'API Server is running.'
//   });
// });

module.exports = router;
