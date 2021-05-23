const store = require("./store");

const getList = () => {
  return store.list();
};

const postMessage = (user, message) => {
  let fullMessage = {
    user,
    message,
    date: new Date(),
  };
  store.add(fullMessage);
};

module.exports = {
  getList,
  postMessage,
};
