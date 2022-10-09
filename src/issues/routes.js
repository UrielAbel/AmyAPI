const express = require('express');
const controllers = require("./controllers/index")
const config = require("../../config")

const router = express.Router();

router.get('/events', (req, res) => {
    res.send("issues's events")
    controllers.events(
      "3657031641",
      config.authToken
    )
  }
);

router.get('/hashes', (req, res) => {
    res.send("issues's hashes")
    controllers.hashes(
      "3657031641",
      config.authToken
    )
  }
);

router.get('/tags', (req, res) => {
  res.send("issues's tags")
  controllers.hashes(
    "3657031641",
    "os",
    config.authToken
  )
}
);

module.exports = router;