const projects = require("../src/projects/routes")
const main = require("../src/main/routes")
const issues = require("../src/issues/routes")

module.exports = (app) => {
  app.use('/', main)
  app.use("/projects", projects)
  app.use("/issues", issues)
};
