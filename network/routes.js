const networkMessages = require("../components/messages/network");

const routes = (server) => {
  server.use("/messages", networkMessages);
};

module.exports = routes;
