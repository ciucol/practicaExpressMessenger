exports.success = (req, res, status, message) => {
  res.status(status).send({ error: "", body: message });
  console.log("Respuesta Correcta");
};

exports.error = (req, res, status, message) => {
  res.status(status).send({ error: message, body: "" });
  console.log("Respuesta Incorrecta");
};
