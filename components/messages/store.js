let store = [];

const list = () => {
  return store;
};

const add = (message) => {
  store.push(message);
};

module.exports = {
  list,
  add,
};
