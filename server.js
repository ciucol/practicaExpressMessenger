const express = require("express");
const { server } = require("./config");
const routes = require("./network/routes");

let app = express();
app.use(express.json());

routes(app);

app.listen(server.port, server.host, () => {
  console.log(`Server running at ${server.host}:${server.port}`);
});
