const express = require('express');
const controller = require("./controller/index")
const config = require('../../config');

const router = express.Router();

router.get('/events', (req, res) => {
    res.send("projects events")
    controller.events(
      "urielabel",
      "node",
      config.authToken
    )
  }
);

router.get('/issues', (req, res) => {
  res.send("projects issue")
  controller.issues(
    "urielabel",
    "node",
    config.authToken
  )
}
);

module.exports = router;