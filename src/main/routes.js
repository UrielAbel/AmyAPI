const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1>Lista de rutas</h1><ul><li><a href='/projects/events'>/projects/events</a></li><li><a href='/projects/issues'>/projects/issues</a></li><li><a href='/issues/events'>/issues/events</a></li><li><a href='/issues/hashes'>/issues/hashes</a></li><li><a href='/issues/tags'>/issues/tags</a></li></ul>")
  }
);

module.exports = router;