const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

router.get("/", (req, res) => {
  let messages = controller.getList();
  response.success(req, res, 200, messages);
});

router.post("/", (req, res) => {
  if (!req) {
    response.error(req, res, 500, "Problemas al guardar mensaje");
  } else {
    controller.postMessage(req.body.user, req.body.message);
    response.success(req, res, 201, "Mensaje guardado");
  }
});

module.exports = router;
